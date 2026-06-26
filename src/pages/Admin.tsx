import React, { useState, useEffect } from 'react'
import ConfirmModal from '../components/confirmModel'
import {
  Lock, Unlock, MessageSquare, Inbox, Briefcase, FileText, Trash2, Plus, Edit, Check, X, Search, Eye, Mail, Building, Calendar, AlertCircle, Loader2
} from 'lucide-react'
import {
  getCaseStudies, addCaseStudy, updateCaseStudy, deleteCaseStudy, getInsights, addInsight, updateInsight, deleteInsight, getMessages, deleteMessage, markMessageRead
} from '../utils/storage'
import { loginAdmin, logoutAdmin, } from '../utils/auth'
// import { isAuthenticated } from '../utils/auth';

import type { CaseStudy,Insight,Message,Metric } from '../utils/storage'

export default function Admin() {
  // Authentication State
  //const [isLoggedIn, setIsLoggedIn] = useState(() => isAuthenticated())
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [authLoading, setAuthLoading] = useState(false)

  // Active Section State
  const [activeTab, setActiveTab] = useState<'dashboard' | 'messages' | 'case-studies' | 'insights'>('dashboard')

  // Storage Data State
  const [messages, setMessages] = useState<Message[]>([])
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
  const [insights, setInsights] = useState<Insight[]>([])

  // Selection / Detail Modals / Edit Forms State
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

  // Case Study Form State
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false)
  const [editingCase, setEditingCase] = useState<CaseStudy | null>(null)
  const [caseFormData, setCaseFormData] = useState<{
    category: string
    title: string
    metadata: string
    desc: string
    metrics: Metric[]
    link: string
    isFeatured: boolean
    isSide: boolean
  }>({
    category: 'OPERATIONAL DUE DILIGENCE',
    title: '',
    metadata: '',
    desc: '',
    metrics: [{ value: '', label: '' }],
    link: '#/contact',
    isFeatured: false,
    isSide: false
  })

  // Insight Form State
  const [isInsightModalOpen, setIsInsightModalOpen] = useState(false)
  const [editingInsight, setEditingInsight] = useState<Insight | null>(null)
  const [insightFormData, setInsightFormData] = useState<{
    category: string
    title: string
    desc: string
    link: string
    isTop: boolean
  }>({
    category: 'OPERATIONS',
    title: '',
    desc: '',
    link: "https://yourdomain.com/insights/",
    isTop: false
  })

  // Search & Filter State
  const [messageSearch, setMessageSearch] = useState('')
  const [messageFilter, setMessageFilter] = useState<'all' | 'unread' | 'read'>('all')

  // Load data helper (async)
  const loadData = async () => {
    try {
      const [msgs, cases, ins] = await Promise.all([
        getMessages(),
        getCaseStudies(),
        getInsights()
      ])
      setMessages(msgs)
      setCaseStudies(cases)
      setInsights(ins)
    } catch (err) {
      console.error('Failed to load data:', err)
    }
  }

  // Reload data on authentication
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     loadData()
  //   }
  // }, [isLoggedIn])
  useEffect(() => {
  const fetchData = async () => {
    if (isLoggedIn) {
      await loadData();
    }
  };

  fetchData();
}, [isLoggedIn]);

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthLoading(true)
    setAuthError('')
    try {
      await loginAdmin(username, password)
      setIsLoggedIn(true)
      setAuthError('')
    } catch  {
      setAuthError('Invalid username or password. Please try again.')
    } finally {
      setAuthLoading(false)
    }
  }

  // Logout handler
  const handleLogout = () => {
    logoutAdmin()
    setIsLoggedIn(false)
    setUsername('')
    setPassword('')
  }
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmConfig, setConfirmConfig] = useState({
    title: "",
    message: "",
    onConfirm: () => { },
    loading: false,
  });
  // const openConfirm = (config: {
  //   title: string;
  //   message: string;
  //   onConfirm: () => void | Promise<void>;
  // }) => {
  //   setConfirmConfig(config);
  //   setConfirmOpen(true);
  // };
  const openConfirm = (config: {
  title: string;
  message: string;
  onConfirm: () => void | Promise<void>;
}) => {
  setConfirmConfig({
    ...config,
    loading: false,
  });

  setConfirmOpen(true);
};
  const handleConfirm = async () => {
    await confirmConfig.onConfirm();
    setConfirmOpen(false);
  };
  const handleCancel = () => {
    setConfirmOpen(false);
  };
  const handleDeleteMessage = (id: string) => {
    openConfirm({
      title: "Delete Message",
      message: "Are you sure you want to delete this message? This action cannot be undone.",
      onConfirm: async () => {
        await deleteMessage(id);
        await loadData();
      },
    });
  };


  const handleToggleMessageRead = async (id: string, currentRead: boolean) => {
    try {
      await markMessageRead(id, !currentRead)
      await loadData()
      if (selectedMessage?.id === id) {
        setSelectedMessage({ ...selectedMessage, read: !currentRead })
      }
    } catch (err) {
      console.error('Failed to toggle message read:', err)
    }
  }

  const handleOpenMessage = async (msg: Message) => {
    setSelectedMessage(msg)
    if (!msg.read) {
      try {
        await markMessageRead(msg.id, true)
        await loadData()
      } catch (err) {
        console.error('Failed to mark message as read:', err)
      }
    }
  }

  // Case Study Metric Helpers
  const handleAddMetricField = () => {
    setCaseFormData({
      ...caseFormData,
      metrics: [...caseFormData.metrics, { value: '', label: '' }]
    })
  }

  const handleRemoveMetricField = (index: number) => {
    const updatedMetrics = [...caseFormData.metrics]
    updatedMetrics.splice(index, 1)
    setCaseFormData({
      ...caseFormData,
      metrics: updatedMetrics
    })
  }

  const handleMetricChange = (index: number, field: 'value' | 'label', text: string) => {
    const updatedMetrics = [...caseFormData.metrics]
    updatedMetrics[index][field] = text
    setCaseFormData({
      ...caseFormData,
      metrics: updatedMetrics
    })
  }

  // Case Study Save Handler
  const handleSaveCaseStudy = async (e: React.FormEvent) => {
    e.preventDefault()

    // Filter empty metrics
    const cleanedMetrics = caseFormData.metrics.filter(m => m.value.trim() !== '' && m.label.trim() !== '')

    try {
      if (editingCase) {
        const updated: CaseStudy = {
          ...editingCase,
          category: caseFormData.category,
          title: caseFormData.title,
          metadata: caseFormData.metadata,
          desc: caseFormData.desc,
          metrics: cleanedMetrics,
          link: caseFormData.link,
          isFeatured: caseFormData.isFeatured,
          isSide: caseFormData.isSide
        }
        await updateCaseStudy(editingCase.id, updated)
      } else {
        await addCaseStudy({
          category: caseFormData.category,
          title: caseFormData.title,
          metadata: caseFormData.metadata,
          desc: caseFormData.desc,
          metrics: cleanedMetrics,
          link: caseFormData.link,
          isFeatured: caseFormData.isFeatured,
          isSide: caseFormData.isSide
        })
      }

      setIsCaseModalOpen(false)
      setEditingCase(null)
      await loadData()
    } catch (err) {
      console.error('Failed to save case study:', err)
    }
  }

  const handleOpenAddCase = () => {
    setEditingCase(null)
    setCaseFormData({
      category: 'OPERATIONAL DUE DILIGENCE',
      title: '',
      metadata: '',
      desc: '',
      metrics: [{ value: '', label: '' }],
      link: "/https://yourdomain.com/insights/",
      isFeatured: false,
      isSide: false
    })
    setIsCaseModalOpen(true)
  }

  const handleOpenEditCase = (study: CaseStudy) => {
    setEditingCase(study)
    setCaseFormData({
      category: study.category,
      title: study.title,
      metadata: study.metadata || '',
      desc: study.desc,
      metrics: study.metrics.length > 0 ? study.metrics.map(m => ({ ...m })) : [{ value: '', label: '' }],
      link: study.link || "/https://yourdomain.com/insights/",
      isFeatured: !!study.isFeatured,
      isSide: !!study.isSide
    })
    setIsCaseModalOpen(true)
  }

  const handleDeleteCase = async (id: string) => {
    openConfirm({
      title: "Delete Case Study",
      message: "This action cannot be undone.",
      onConfirm: async () => {
        await deleteCaseStudy(id);
        await loadData();
      },
    });
  };

  // Insight Save Handler
  const handleSaveInsight = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (editingInsight) {
        const updated: Insight = {
          ...editingInsight,
          category: insightFormData.category,
          title: insightFormData.title,
          desc: insightFormData.desc,
          link: insightFormData.link,
          isTop: insightFormData.isTop
        }
        await updateInsight(editingInsight.id, updated)
      } else {
        await addInsight({
          category: insightFormData.category,
          title: insightFormData.title,
          desc: insightFormData.desc,
          link: insightFormData.link,
          isTop: insightFormData.isTop
        })
      }

      setIsInsightModalOpen(false)
      setEditingInsight(null)
      await loadData()
    } catch (err) {
      console.error('Failed to save insight:', err)
    }
  }


  const handleOpenAddInsight = () => {
    setEditingInsight(null)
    setInsightFormData({
      category: 'OPERATIONS',
      title: '',
      desc: '',
      link: "/https://yourdomain.com/insights/",
      isTop: false
    })
    setIsInsightModalOpen(true)
  }

  const handleOpenEditInsight = (insight: Insight) => {
    setEditingInsight(insight)
    setInsightFormData({
      category: insight.category,
      title: insight.title,
      desc: insight.desc,
      link: insight.link || "/https://yourdomain.com/insights/",
      isTop: insight.isTop
    })
    setIsInsightModalOpen(true)
  }

  const handleDeleteInsight = async (id: number) => {
    openConfirm({
      title: "Delete Insight",
      message: "Are you sure you want to delete this insight?",
      onConfirm: async () => {
        await deleteInsight(id);
        await loadData();
      },
    });
  };

  // Filter messages based on search and tab selections
  const filteredMessages = messages.filter(msg => {
    const matchesSearch =
      msg.name.toLowerCase().includes(messageSearch.toLowerCase()) ||
      msg.email.toLowerCase().includes(messageSearch.toLowerCase()) ||
      msg.company.toLowerCase().includes(messageSearch.toLowerCase()) ||
      msg.message.toLowerCase().includes(messageSearch.toLowerCase())

    if (messageFilter === 'unread') return matchesSearch && !msg.read
    if (messageFilter === 'read') return matchesSearch && msg.read
    return matchesSearch
  })

  const unreadCount = messages.filter(m => !m.read).length

  // Authentication Gate Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md bg-white border border-slate-200 p-8 shadow-sm">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-blue-50 text-brand-blue flex items-center justify-center rounded-none mb-3">
              <Lock size={22} className="text-[#0e5db3]" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-slate-800">EVERSTONE</h1>
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-slate-400 mt-1 uppercase">
              Administrative Portal
            </span>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Email
              </label>
              <input
                type="text"
                id="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="border border-slate-200 p-3.5 focus:outline-none focus:border-[#0e5db3] text-[13.5px] bg-[#fcfdfe] focus:bg-white transition-colors placeholder:text-slate-400 font-light"
                autoFocus
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="border border-slate-200 p-3.5 focus:outline-none focus:border-[#0e5db3] text-[13.5px] bg-[#fcfdfe] focus:bg-white transition-colors placeholder:text-slate-400 font-light"
              />
              {authError && (
                <div className="flex items-center gap-1.5 text-xs text-red-600 mt-1">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>{authError}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="bg-[#051b33] hover:bg-[#0e5db3] text-white text-[13px] font-bold py-3.5 px-6 transition-all duration-200 uppercase tracking-wider shadow-sm mt-1 cursor-pointer text-center disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {authLoading && <Loader2 size={16} className="animate-spin" />}
              {authLoading ? 'Authenticating...' : 'Sign In'}
            </button>

          
          </form>
        </div>
      </div>
    )
  }

  return (
    <>
      <ConfirmModal
        open={confirmOpen}
        title={confirmConfig.title}
        message={confirmConfig.message}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pt-20">
        {/* Admin Sub-Navbar */}
        <div className="bg-white border-b border-slate-200 py-4 px-6 sticky top-17 z-30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <h2 className="font-serif text-xl font-bold text-slate-800">
                  Everstone Systems Portal
                </h2>
              </div>
             
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleLogout}
                className="border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold px-4 py-2 transition-colors cursor-pointer"
              >
                Lock Panel
              </button>
              <a
                href="/home"
                className="bg-[#0e5db3] hover:bg-[#0b4a91] text-white text-xs font-semibold px-4 py-2 transition-colors cursor-pointer"
              >
                View Site
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Sidebar Navigation (Span 3) */}
            <div className="lg:col-span-3 bg-white border border-slate-200 p-2 flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 text-[13px] font-semibold transition-all cursor-pointer border-l-2 whitespace-nowrap lg:whitespace-normal ${activeTab === 'dashboard'
                  ? 'bg-blue-50/50 text-[#0e5db3] border-[#0e5db3]'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-transparent'
                  }`}
              >
                <Unlock size={16} />
                Dashboard Overview
              </button>

              <button
                onClick={() => setActiveTab('messages')}
                className={`flex items-center justify-between w-full px-4 py-3 text-[13px] font-semibold transition-all cursor-pointer border-l-2 whitespace-nowrap lg:whitespace-normal ${activeTab === 'messages'
                  ? 'bg-blue-50/50 text-[#0e5db3] border-[#0e5db3]'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-transparent'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Inbox size={16} />
                  Messages Inbox
                </div>
                {unreadCount > 0 && (
                  <span className="bg-[#0e5db3] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('case-studies')}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 text-[13px] font-semibold transition-all cursor-pointer border-l-2 whitespace-nowrap lg:whitespace-normal ${activeTab === 'case-studies'
                  ? 'bg-blue-50/50 text-[#0e5db3] border-[#0e5db3]'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-transparent'
                  }`}
              >
                <Briefcase size={16} />
                Manage Case Studies
              </button>

              <button
                onClick={() => setActiveTab('insights')}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 text-[13px] font-semibold transition-all cursor-pointer border-l-2 whitespace-nowrap lg:whitespace-normal ${activeTab === 'insights'
                  ? 'bg-blue-50/50 text-[#0e5db3] border-[#0e5db3]'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-transparent'
                  }`}
              >
                <FileText size={16} />
                Manage Insights
              </button>
            </div>

            {/* Right Main Panel (Span 9) */}
            <div className="lg:col-span-9 bg-white border border-slate-200 p-6 md:p-8">

              {/* ── TAB: DASHBOARD OVERVIEW ── */}
              {activeTab === 'dashboard' && (
                <div className="flex flex-col gap-8">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">Dashboard Summary</h3>
                    <p className="text-slate-500 text-[13.5px] font-light mt-1">
                      System operations and content status summary metrics.
                    </p>
                  </div>

                  {/* Info Cards Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Messages Card */}
                    <div
                      onClick={() => setActiveTab('messages')}
                      className="border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0e5db3] transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Inquiries Inbox</span>
                        <MessageSquare className="text-slate-400 group-hover:text-[#0e5db3] transition-colors" size={20} />
                      </div>
                      <div>
                        <span className="font-serif text-3xl font-bold text-slate-800">{messages.length}</span>
                        <span className="text-slate-400 text-xs font-light block mt-1">
                          {unreadCount} unread form submissions
                        </span>
                      </div>
                    </div>

                    {/* Case Studies Card */}
                    <div
                      onClick={() => setActiveTab('case-studies')}
                      className="border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0e5db3] transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Case Studies</span>
                        <Briefcase className="text-slate-400 group-hover:text-[#0e5db3] transition-colors" size={20} />
                      </div>
                      <div>
                        <span className="font-serif text-3xl font-bold text-slate-800">{caseStudies.length}</span>
                        <span className="text-slate-400 text-xs font-light block mt-1">
                          {caseStudies.filter(c => c.isFeatured).length} spotlight featured case
                        </span>
                      </div>
                    </div>

                    {/* Insights Card */}
                    <div
                      onClick={() => setActiveTab('insights')}
                      className="border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0e5db3] transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Insights</span>
                        <FileText className="text-slate-400 group-hover:text-[#0e5db3] transition-colors" size={20} />
                      </div>
                      <div>
                        <span className="font-serif text-3xl font-bold text-slate-800">{insights.length}</span>
                        <span className="text-slate-400 text-xs font-light block mt-1">
                          {insights.filter(i => i.isTop).length} featured top articles
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Guidelines */}
                  <div className="border border-slate-200 bg-slate-50/50 p-6 flex flex-col gap-4">
                    <h4 className="font-serif text-lg font-bold text-slate-800">Operational Guidelines</h4>
                    <div className="text-slate-600 text-[13.5px] leading-relaxed font-light flex flex-col gap-3">
                      <p>
                        <strong>1. Real-time Synchronization:</strong> Any changes made here are written to `localStorage` and will propagate instantly to the main site views without rebuilding.
                      </p>
                      <p>
                        <strong>2. Case Studies Layout:</strong> The site layout highlights 1 "Spotlight Featured" card and 2 "Spotlight Side" cards when viewing the "All Engagements" filter. Other items flow into the bottom cards grid.
                      </p>
                      <p>
                        <strong>3. Insights Layout:</strong> Insights designated as "Featured Top" are styled as dark boxes in a 2-column row. Non-top insights render as three elegant columns in a bottom row.
                      </p>
                    </div>
                  </div>

                  {/* Recent Inquiries List */}
                  <div className="border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-serif text-lg font-bold text-slate-800">Recent Inquiries</h4>
                      <button
                        onClick={() => setActiveTab('messages')}
                        className="text-xs text-[#0e5db3] hover:underline font-semibold"
                      >
                        View All Messages
                      </button>
                    </div>

                    {messages.length === 0 ? (
                      <p className="text-slate-400 text-sm font-light py-4 italic text-center">
                        No customer inquiries received yet.
                      </p>
                    ) : (
                      <div className="flex flex-col divide-y divide-slate-100">
                        {messages.slice(0, 3).map((msg) => (
                          <div
                            key={msg.id}
                            className="py-3.5 flex items-center justify-between text-[13.5px] group hover:bg-slate-50/50 px-2 transition-colors cursor-pointer"
                            onClick={() => {
                              setActiveTab('messages')
                              setSelectedMessage(msg)
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-2 h-2 rounded-full shrink-0 ${msg.read ? 'bg-transparent' : 'bg-[#0e5db3]'}`}></span>
                              <div>
                                <span className="font-semibold text-slate-800">{msg.name}</span>
                                <span className="text-slate-400 mx-2 font-light">|</span>
                                <span className="text-slate-500 font-light">{msg.company}</span>
                              </div>
                            </div>
                            <span className="text-xs text-slate-400 font-light">
                              {new Date(msg.date).toLocaleDateString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ── TAB: MESSAGES INBOX ── */}
              {activeTab === 'messages' && (
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-slate-900">Inquiries Inbox</h3>
                      <p className="text-slate-500 text-[13.5px] font-light mt-1">
                        Check and respond to user messages submitted through the Contact page form.
                      </p>
                    </div>
                  </div>

                  {/* Filters and Search */}
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="relative w-full md:max-w-xs">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input
                        type="text"
                        placeholder="Search inbox..."
                        value={messageSearch}
                        onChange={(e) => setMessageSearch(e.target.value)}
                        className="border border-slate-200 pl-9 pr-4 py-2 w-full text-[13px] bg-[#fcfdfe] focus:outline-none focus:border-[#0e5db3]"
                      />
                    </div>

                    <div className="flex border border-slate-200 p-0.5 w-full md:w-auto text-[12px] bg-slate-50">
                      <button
                        onClick={() => setMessageFilter('all')}
                        className={`px-4 py-1.5 font-medium cursor-pointer ${messageFilter === 'all' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                          }`}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setMessageFilter('unread')}
                        className={`px-4 py-1.5 font-medium cursor-pointer relative ${messageFilter === 'unread' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                          }`}
                      >
                        Unread
                        {unreadCount > 0 && (
                          <span className="absolute -top-1 -right-1 bg-[#0e5db3] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                            {unreadCount}
                          </span>
                        )}
                      </button>
                      <button
                        onClick={() => setMessageFilter('read')}
                        className={`px-4 py-1.5 font-medium cursor-pointer ${messageFilter === 'read' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                          }`}
                      >
                        Read
                      </button>
                    </div>
                  </div>

                  {/* Messages List Area */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Messages Feed (Span 5) */}
                    <div className="md:col-span-5 border border-slate-200 max-h-[500px] overflow-y-auto flex flex-col divide-y divide-slate-100">
                      {filteredMessages.length === 0 ? (
                        <div className="py-12 text-center text-slate-400 italic text-[13px] font-light">
                          No messages found.
                        </div>
                      ) : (
                        filteredMessages.map((msg) => (
                          <div
                            key={msg.id}
                            onClick={() => handleOpenMessage(msg)}
                            className={`p-4 text-left cursor-pointer transition-colors ${selectedMessage?.id === msg.id
                              ? 'bg-blue-50/30 border-r-2 border-[#0e5db3]'
                              : 'hover:bg-slate-50/50'
                              }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className={`text-[11px] font-bold uppercase px-1.5 py-0.5 rounded-none border ${!msg.read ? 'bg-blue-50 text-brand-blue border-blue-100' : 'bg-slate-50 text-slate-500 border-slate-200'
                                }`}>
                                {!msg.read ? 'Unread' : 'Read'}
                              </span>
                              <span className="text-[10px] text-slate-400 font-light">
                                {new Date(msg.date).toLocaleDateString()}
                              </span>
                            </div>
                            <h4 className="font-semibold text-slate-800 text-[13.5px] truncate">{msg.name}</h4>
                            <p className="text-slate-500 text-xs font-medium truncate mt-0.5">{msg.company}</p>
                            <p className="text-slate-400 text-xs font-light truncate mt-1.5">{msg.message}</p>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Message Detail View (Span 7) */}
                    <div className="md:col-span-7 border border-slate-200 p-6 min-h-[300px] flex flex-col">
                      {selectedMessage ? (
                        <div className="flex flex-col h-full gap-5">
                          <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                            <div>
                              <h4 className="font-serif text-xl font-bold text-slate-800">
                                {selectedMessage.name}
                              </h4>
                              <p className="text-[13px] text-slate-500 font-light mt-0.5">
                                {selectedMessage.role}
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <button
                                onClick={() => handleToggleMessageRead(selectedMessage.id, selectedMessage.read)}
                                title={selectedMessage.read ? 'Mark as Unread' : 'Mark as Read'}
                                className="p-2 border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                              >
                                <Check size={15} className={selectedMessage.read ? 'text-emerald-600 font-bold' : ''} />
                              </button>
                              <button
                                onClick={() => handleDeleteMessage(selectedMessage.id)}
                                title="Delete Message"
                                className="p-2 border border-slate-200 text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </div>

                          {/* Metadata Rows */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] bg-slate-50/50 p-4 border border-slate-100">
                            <div className="flex items-center gap-2">
                              <Building size={14} className="text-slate-400 shrink-0" />
                              <span className="text-slate-500 font-light">Company:</span>
                              <span className="font-medium text-slate-700">{selectedMessage.company}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <Mail size={14} className="text-slate-400 shrink-0" />
                              <span className="text-slate-500 font-light">Email:</span>
                              <a href={`mailto:${selectedMessage.email}`} className="font-medium text-[#0e5db3] hover:underline">
                                {selectedMessage.email}
                              </a>
                            </div>

                            <div className="flex items-center gap-2">
                              <Calendar size={14} className="text-slate-400 shrink-0" />
                              <span className="text-slate-500 font-light">Submitted:</span>
                              <span className="font-medium text-slate-700">
                                {new Date(selectedMessage.date).toLocaleString()}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <Briefcase size={14} className="text-slate-400 shrink-0" />
                              <span className="text-slate-500 font-light">Service:</span>
                              <span className="font-medium text-slate-700 uppercase">
                                {selectedMessage.interest === 'odd' ? 'Operational Due Diligence' :
                                  selectedMessage.interest === 'audit' ? 'Bankability Audit' :
                                    selectedMessage.interest === 'coaching' ? 'Leadership Coaching' : 'Advisory Interest'}
                              </span>
                            </div>
                          </div>

                          {/* Actual Message Body */}
                          <div className="flex-grow flex flex-col gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              Message Content
                            </span>
                            <p className="text-slate-700 text-[13.5px] leading-relaxed font-light whitespace-pre-wrap border border-slate-100 p-4 min-h-[120px] bg-white">
                              {selectedMessage.message}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center my-auto text-center gap-2 text-slate-400">
                          <Eye size={28} className="stroke-slate-300" />
                          <p className="text-sm font-light italic">Select an inquiry from the inbox feed to view details</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ── TAB: MANAGE CASE STUDIES ── */}
              {activeTab === 'case-studies' && (
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-slate-900">Manage Case Studies</h3>
                      <p className="text-slate-500 text-[13.5px] font-light mt-1">
                        Create, update, and remove case study cards and metrics.
                      </p>
                    </div>

                    <button
                      onClick={handleOpenAddCase}
                      className="bg-[#0e5db3] hover:bg-[#0b4a91] text-white text-xs font-semibold px-4 py-2.5 flex items-center justify-center gap-1.5 transition-colors cursor-pointer self-start uppercase tracking-wider shadow-sm"
                    >
                      <Plus size={14} /> Add Case Study
                    </button>
                  </div>

                  {/* Case Studies Table list */}
                  <div className="border border-slate-200 overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[13px]">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-600 uppercase text-[10px] tracking-wider">
                          <th className="p-4 w-1/3">Title & Category</th>
                          <th className="p-4">Metadata</th>
                          <th className="p-4 w-1/4">Key Metrics</th>
                          <th className="p-4 text-center">Status</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {caseStudies.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="p-8 text-center text-slate-400 italic font-light">
                              No case studies found. Create one using the button above.
                            </td>
                          </tr>
                        ) : (
                          caseStudies.map((study) => (
                            <tr key={study.id} className="hover:bg-slate-50/50">
                              <td className="p-4 align-top">
                                <span className="text-[10px] font-bold text-[#0e5db3] uppercase block mb-1">
                                  {study.category}
                                </span>
                                <span className="font-medium text-slate-800 block text-[13.5px] leading-snug">
                                  {study.title}
                                </span>
                              </td>
                              <td className="p-4 align-top text-slate-500 font-light leading-relaxed">
                                {study.metadata}
                              </td>
                              <td className="p-4 align-top">
                                <div className="flex flex-col gap-1.5">
                                  {study.metrics.map((m, mIdx) => (
                                    <div key={mIdx} className="flex items-center gap-1.5">
                                      <span className="bg-blue-50 text-[#0e5db3] font-serif font-bold px-1.5 py-0.5 text-[11px]">
                                        {m.value}
                                      </span>
                                      <span className="text-[10.5px] text-slate-500 font-light truncate max-w-[120px]">
                                        {m.label}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </td>
                              <td className="p-4 align-top text-center">
                                <div className="flex flex-col items-center gap-1">
                                  {study.isFeatured && (
                                    <span className="bg-amber-50 text-amber-700 border border-amber-100 text-[9px] font-bold px-1.5 py-0.5 uppercase">
                                      Featured Spotlight
                                    </span>
                                  )}
                                  {study.isSide && (
                                    <span className="bg-sky-50 text-[#0e5db3] border border-sky-100 text-[9px] font-bold px-1.5 py-0.5 uppercase">
                                      Side Card
                                    </span>
                                  )}
                                  {!study.isFeatured && !study.isSide && (
                                    <span className="bg-slate-50 text-slate-500 border border-slate-200 text-[9px] font-medium px-1.5 py-0.5 uppercase">
                                      Standard Grid
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="p-4 align-top text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <button
                                    onClick={() => handleOpenEditCase(study)}
                                    title="Edit Case Study"
                                    className="p-1.5 border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
                                  >
                                    <Edit size={14} />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteCase(study.id)}
                                    title="Delete Case Study"
                                    className="p-1.5 border border-slate-200 hover:bg-red-50 text-red-600 transition-colors cursor-pointer"
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* ── TAB: MANAGE INSIGHTS ── */}
              {activeTab === 'insights' && (
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-slate-900">Manage Insights</h3>
                      <p className="text-slate-500 text-[13.5px] font-light mt-1">
                        Publish and edit articles, analyses, and manufacturing thought leadership.
                      </p>
                    </div>

                    <button
                      onClick={handleOpenAddInsight}
                      className="bg-[#0e5db3] hover:bg-[#0b4a91] text-white text-xs font-semibold px-4 py-2.5 flex items-center justify-center gap-1.5 transition-colors cursor-pointer self-start uppercase tracking-wider shadow-sm"
                    >
                      <Plus size={14} /> Add Insight
                    </button>
                  </div>

                  {/* Insights table list */}
                  <div className="border border-slate-200 overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[13px]">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-600 uppercase text-[10px] tracking-wider">
                          <th className="p-4 w-1/3">Title & Category</th>
                          <th className="p-4">Description Preview</th>
                          <th className="p-4 text-center">Placement</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {insights.length === 0 ? (
                          <tr>
                            <td colSpan={4} className="p-8 text-center text-slate-400 italic font-light">
                              No insights found. Publish one using the button above.
                            </td>
                          </tr>
                        ) : (
                          insights.map((insight) => (
                            <tr key={insight.id} className="hover:bg-slate-50/50">
                              <td className="p-4 align-top">
                                <span className="text-[10px] font-bold text-[#0e5db3] uppercase block mb-1">
                                  {insight.category}
                                </span>
                                <span className="font-medium text-slate-800 block text-[13.5px] leading-snug">
                                  {insight.title}
                                </span>
                              </td>
                              <td className="p-4 align-top text-slate-500 font-light leading-relaxed text-xs">
                                <p className="line-clamp-2 max-w-md">{insight.desc}</p>
                              </td>
                              <td className="p-4 align-top text-center">
                                {insight.isTop ? (
                                  <span className="bg-[#051b33] text-white text-[9px] font-bold px-2 py-0.5 uppercase border border-transparent">
                                    Top Row (Dark Card)
                                  </span>
                                ) : (
                                  <span className="bg-white text-slate-600 text-[9px] font-bold px-2 py-0.5 uppercase border border-slate-200">
                                    Bottom Grid (White Card)
                                  </span>
                                )}
                              </td>
                              <td className="p-4 align-top text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <button
                                    onClick={() => handleOpenEditInsight(insight)}
                                    title="Edit Insight"
                                    className="p-1.5 border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
                                  >
                                    <Edit size={14} />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteInsight(insight.id)}
                                    title="Delete Insight"
                                    className="p-1.5 border border-slate-200 hover:bg-red-50 text-red-600 transition-colors cursor-pointer"
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* ── MODAL: CASE STUDY FORM ── */}
        {isCaseModalOpen && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
            <div className="bg-white border border-slate-200 w-full max-w-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  {editingCase ? 'Edit Case Study' : 'Create Case Study'}
                </h3>
                <button
                  onClick={() => setIsCaseModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSaveCaseStudy} className="flex flex-col gap-5">
                {/* Category & Link */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Category
                    </label>
                    <select
                      value={caseFormData.category}
                      onChange={(e) => setCaseFormData({ ...caseFormData, category: e.target.value })}
                      className="border border-slate-200 p-2.5 text-[13px] bg-white focus:outline-none focus:border-[#0e5db3]"
                    >
                      <option value="OPERATIONAL DUE DILIGENCE">OPERATIONAL DUE DILIGENCE</option>
                      <option value="BANKABILITY AUDIT">BANKABILITY AUDIT</option>
                      <option value="LEADERSHIP COACHING">LEADERSHIP COACHING</option>
                      <option value="VALUE ASSESSMENT">VALUE ASSESSMENT</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Link Destination
                    </label>
                    <input
                      type="text"
                      required
                      value={caseFormData.link}
                      onChange={(e) => setCaseFormData({ ...caseFormData, link: e.target.value })}
                      className="border border-slate-200 p-2.5 text-[13px] focus:outline-none focus:border-[#0e5db3]"
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Case Study Title
                  </label>
                  <input
                    type="text"
                    required
                    value={caseFormData.title}
                    onChange={(e) => setCaseFormData({ ...caseFormData, title: e.target.value })}
                    placeholder="e.g. OEE Analysis Quantifies $900K in Recoverable EBITDA..."
                    className="border border-slate-200 p-2.5 text-[13px] focus:outline-none focus:border-[#0e5db3]"
                  />
                </div>

                {/* Metadata */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Metadata Detail Row
                  </label>
                  <input
                    type="text"
                    value={caseFormData.metadata}
                    onChange={(e) => setCaseFormData({ ...caseFormData, metadata: e.target.value })}
                    placeholder="e.g. • Precision Metal Components • Midwest, USA • Private Equity Acquisition"
                    className="border border-slate-200 p-2.5 text-[13px] focus:outline-none focus:border-[#0e5db3]"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Case Narrative Description
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={caseFormData.desc}
                    onChange={(e) => setCaseFormData({ ...caseFormData, desc: e.target.value })}
                    placeholder="Describe the operational findings, EBITDA leaks, auditing process, and business results achieved..."
                    className="border border-slate-200 p-2.5 text-[13px] resize-none focus:outline-none focus:border-[#0e5db3]"
                  />
                </div>

                {/* Layout Placement */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Spotlight Layout Placement
                  </label>
                  <div className="flex flex-wrap gap-4 mt-1 text-[13px]">
                    <label className="flex items-center gap-2 cursor-pointer font-light">
                      <input
                        type="radio"
                        name="placement"
                        checked={caseFormData.isFeatured}
                        onChange={() => setCaseFormData({ ...caseFormData, isFeatured: true, isSide: false })}
                        className="accent-[#0e5db3]"
                      />
                      Featured Spotlight Card (Dark Left, max 1)
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer font-light">
                      <input
                        type="radio"
                        name="placement"
                        checked={caseFormData.isSide}
                        onChange={() => setCaseFormData({ ...caseFormData, isFeatured: false, isSide: true })}
                        className="accent-[#0e5db3]"
                      />
                      Featured Side Card (White Right, max 2)
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer font-light">
                      <input
                        type="radio"
                        name="placement"
                        checked={!caseFormData.isFeatured && !caseFormData.isSide}
                        onChange={() => setCaseFormData({ ...caseFormData, isFeatured: false, isSide: false })}
                        className="accent-[#0e5db3]"
                      />
                      Standard Grid Card (Bottom List)
                    </label>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="border border-slate-100 p-4 bg-slate-50/50 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Key Metrics & Highlights
                    </span>
                    <button
                      type="button"
                      onClick={handleAddMetricField}
                      className="text-xs text-[#0e5db3] hover:text-[#0b4a91] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <Plus size={12} /> Add Metric
                    </button>
                  </div>

                  <div className="flex flex-col gap-2 max-h-[160px] overflow-y-auto">
                    {caseFormData.metrics.map((metric, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <input
                          type="text"
                          placeholder="Value (e.g. $2.4M, 18%)"
                          value={metric.value}
                          onChange={(e) => handleMetricChange(index, 'value', e.target.value)}
                          className="border border-slate-200 p-2 text-[12px] bg-white w-1/3 focus:outline-none focus:border-[#0e5db3]"
                        />
                        <input
                          type="text"
                          placeholder="Label (e.g. capacity overstated)"
                          value={metric.label}
                          onChange={(e) => handleMetricChange(index, 'label', e.target.value)}
                          className="border border-slate-200 p-2 text-[12px] bg-white flex-grow focus:outline-none focus:border-[#0e5db3]"
                        />
                        {caseFormData.metrics.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveMetricField(index)}
                            className="p-2 text-red-500 hover:bg-red-50 transition-colors"
                          >
                            <X size={15} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4 mt-2">
                  <button
                    type="button"
                    onClick={() => setIsCaseModalOpen(false)}
                    className="px-5 py-2.5 border border-slate-200 hover:bg-slate-50 text-[13px] font-semibold text-slate-600 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#051b33] hover:bg-[#0e5db3] text-white text-[13px] font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                  >
                    {editingCase ? 'Save Changes' : 'Create Case Study'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ── MODAL: INSIGHT FORM ── */}
        {isInsightModalOpen && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
            <div className="bg-white border border-slate-200 w-full max-w-xl p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  {editingInsight ? 'Edit Insight' : 'Publish Insight'}
                </h3>
                <button
                  onClick={() => setIsInsightModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSaveInsight} className="flex flex-col gap-5">
                {/* Category & Placement */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Category
                    </label>
                    <input
                      type="text"
                      required
                      value={insightFormData.category}
                      onChange={(e) => setInsightFormData({ ...insightFormData, category: e.target.value })}
                      placeholder="e.g. QUALITY & FINANCE"
                      className="border border-slate-200 p-2.5 text-[13px] focus:outline-none focus:border-[#0e5db3]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Placement Row
                    </label>
                    <select
                      value={insightFormData.isTop ? 'top' : 'bottom'}
                      onChange={(e) => setInsightFormData({ ...insightFormData, isTop: e.target.value === 'top' })}
                      className="border border-slate-200 p-2.5 text-[13px] bg-white focus:outline-none focus:border-[#0e5db3]"
                    >
                      <option value="bottom">Bottom Grid (Standard White Card)</option>
                      <option value="top">Top Row (Featured Dark Card)</option>
                    </select>
                  </div>
                </div>

                {/* Title */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Article Title
                  </label>
                  <input
                    type="text"
                    required
                    value={insightFormData.title}
                    onChange={(e) => setInsightFormData({ ...insightFormData, title: e.target.value })}
                    placeholder="e.g. Scrap Is Not a Quality Problem. It Is Margin Leakage."
                    className="border border-slate-200 p-2.5 text-[13px] focus:outline-none focus:border-[#0e5db3]"
                  />
                </div>

                {/* Link */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Link Target Destination
                  </label>
                  <input
                    type="text"
                    required
                    value={insightFormData.link}
                    onChange={(e) => setInsightFormData({ ...insightFormData, link: e.target.value })}
                    className="border border-slate-200 p-2.5 text-[13px] focus:outline-none focus:border-[#0e5db3]"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Article Summary / Description
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={insightFormData.desc}
                    onChange={(e) => setInsightFormData({ ...insightFormData, desc: e.target.value })}
                    placeholder="A short summary paragraph of the thought leadership piece..."
                    className="border border-slate-200 p-2.5 text-[13px] resize-none focus:outline-none focus:border-[#0e5db3]"
                  />
                </div>

                {/* Form Buttons */}
                <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4 mt-2">
                  <button
                    type="button"
                    onClick={() => setIsInsightModalOpen(false)}
                    className="px-5 py-2.5 border border-slate-200 hover:bg-slate-50 text-[13px] font-semibold text-slate-600 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#051b33] hover:bg-[#0e5db3] text-white text-[13px] font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                  >
                    {editingInsight ? 'Save Changes' : 'Publish Insight'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
