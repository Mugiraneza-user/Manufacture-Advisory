// import type { CaseStudy, Insight, Message, Metric } from './storage';
import { getAuthToken } from './auth';
// const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';
const API_BASE = import.meta.env.VITE_API_URL || 'https://manufacture-advisory-production.up.railway.app';

/** Helper to handle JSON responses */
// async function authFetch(endpoint: string, options: RequestInit = {}) {
//   const token = getAuthToken();

//   const headers = {
//     'Content-Type': 'application/json',
//     ...(token && { 'Authorization': `Token ${token}` }),
//     ...options.headers,
//   };

//   const response = await fetch(`${API_BASE}${endpoint}`, {
//     ...options,
//     headers,
//   });

//   if (response.status === 401) {
//     // Unauthorized - clear token and redirect to login
//     localStorage.removeItem('auth_token');
//     window.location.href = '/admin/login';
//     throw new Error('Session expired. Please login again.');
//   }

//   return handleResponse(response);
// }

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API error ${response.status}: ${errorText}`);
  }
  return response.json();
}

/** CASE STUDIES */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  const token = getAuthToken()
  const res = await fetch(`${API_BASE}/case-studies/`, {
    headers: { 'Content-Type': 'application/json', Authorization: `Token ${token}`, },
  });
  return handleResponse<CaseStudy[]>(res);
}

export async function addCaseStudy(data: Omit<CaseStudy, 'id'>): Promise<CaseStudy> {
  const token = getAuthToken()
  const res = await fetch(`${API_BASE}/case-studies/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Token ${token}`, },
    body: JSON.stringify(data),
  });
  return handleResponse<CaseStudy>(res);
}

export async function updateCaseStudy(id: string, data: Partial<Omit<CaseStudy, 'id'>>): Promise<CaseStudy> {
  const token = getAuthToken()
  const res = await fetch(`${API_BASE}/case-studies/${id}/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Token ${token}` },
    body: JSON.stringify(data),
  });
  return handleResponse<CaseStudy>(res);
}

export async function deleteCaseStudy(id: string): Promise<void> {
  const token = getAuthToken()
  const res = await fetch(`${API_BASE}/case-studies/${id}/`, {
    method: 'DELETE',
    headers: { Authorization: `Token ${token}` },
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to delete case study: ${err}`);
  }
}

/** INSIGHTS */
export async function getInsights(): Promise<Insight[]> {
  const token = getAuthToken()
  const res = await fetch(`${API_BASE}/insights/`, {
    headers: { Authorization: `Token ${token}` }
  }

  );
  return handleResponse<Insight[]>(res);
}

export async function addInsight(data: Omit<Insight, 'id'>): Promise<Insight> {
  const token = getAuthToken()
  const res = await fetch(`${API_BASE}/insights/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Token ${token}` },
    body: JSON.stringify(data),
  });
  return handleResponse<Insight>(res);
}

export async function updateInsight(id: string, data: Partial<Omit<Insight, 'id'>>): Promise<Insight> {
  const token = getAuthToken()
  const res = await fetch(`${API_BASE}/insights/${id}/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Token ${token}` },
    body: JSON.stringify(data),
  });
  return handleResponse<Insight>(res);
}

export async function deleteInsight(id: string): Promise<void> {
  const token = getAuthToken()
  const res = await fetch(`${API_BASE}/insights/${id}/`, { method: 'DELETE', headers: { Authorization: `Token ${token}`, } });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to delete insight: ${err}`);
  }
}

/** MESSAGES */


export async function getMessages(): Promise<Message[]> {
  const token = getAuthToken()
  const res = await fetch(`${API_BASE}/messages/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
  return handleResponse<Message[]>(res);
}

export async function addMessage(data: Omit<Message, 'id' | 'read' | 'date'>): Promise<Message> {
  const token = getAuthToken()
  const res = await fetch(`${API_BASE}/messages/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Token ${token}` },
    body: JSON.stringify(data),
  });
  return handleResponse<Message>(res);
}

export async function deleteMessage(id: string): Promise<void> {
  const token = getAuthToken()
  const res = await fetch(`${API_BASE}/messages/${id}/`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', Authorization: `Token ${token}`, },
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to delete message: ${err}`);
  }
}

export async function markMessageRead(id: string, read: boolean): Promise<Message> {
  const token = getAuthToken()
  const res = await fetch(`${API_BASE}/messages/${id}/`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Token ${token}`, },
    body: JSON.stringify({ read }),
  });
  return handleResponse<Message>(res);
}

/** Types exported for external use */
//export interface type { CaseStudy, Insight, Message, Metric, authFatch };

//   value: string;
//   label: string;
// }
export interface Metric {
  value: string;
  label: string;
}
export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  metadata: string;
  desc: string;
  metrics: Metric[];
  link: string;
  isFeatured?: boolean; // True for the spotlight featured card
  isSide?: boolean;     // True for the two spotlight side cards
}

export interface Insight {
  id: string;
  category: string;
  title: string;
  desc: string;
  link: string;
  isTop: boolean; // True for the top row (dark cards), false for the bottom row (white cards)
}

export interface Message {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  interest: string;
  message: string;
  date: string;
  read: boolean;
}

// const STORAGE_KEYS = {
//   CASE_STUDIES: 'everstone_case_studies',
//   INSIGHTS: 'everstone_insights',
//   MESSAGES: 'everstone_messages',
// };

// // Seed Data
// const defaultCaseStudies: CaseStudy[] = [
//   {
//     id: 'case-1',
//     category: 'OPERATIONAL DUE DILIGENCE',
//     title: 'Operational Due Diligence Reveals $2.4M in Hidden EBITDA Risk Before Acquisition Close',
//     metadata: '• Precision Metal Components • Midwest, USA • Private Equity Acquisition',
//     desc: 'A PE firm commissioned EVERSTONE to assess a precision machining business prior to close. The financial model showed stable EBITDA. The factory told a different story  one the P&L had no way to reflect. Three critical quality system gaps were identified. Capacity assumptions were overstated by 18%. Scrap and rework were absorbing margin management had attributed to normal variance.',
//     metrics: [
//       { value: '$2.4M', label: 'EBITDA risk in scrap, rework & downtime' },
//       { value: '3', label: 'Critical quality gaps flagged before close' },
//       { value: '18%', label: 'Capacity overstated in growth model' }
//     ],
//     link: '#/contact',
//     isFeatured: true
//   },
//   {
//     id: 'case-2',
//     category: 'BANKABILITY AUDIT',
//     title: "Manufacturer Secures $3.8M Credit Line After Bankability Audit Closes Lender's Confidence Gap",
//     metadata: '• Injection Molding Manufacturer • Southeast, USA',
//     desc: 'A mid-size plastics manufacturer had strong revenue but struggled to secure an expansion credit line. EVERSTONE built an evidence package that directly addressed lender concerns.',
//     metrics: [
//       { value: '$3.8M', label: 'Credit line secured' },
//       { value: '6 wks', label: 'Audit to approval' },
//       { value: '9/10', label: 'Bankability score' }
//     ],
//     link: '#/contact',
//     isSide: true
//   },
//   {
//     id: 'case-3',
//     category: 'LEADERSHIP COACHING',
//     title: 'Plant Leadership Team Connects Factory KPIs to EBITDA — Presenting to PE Board with Confidence',
//     metadata: '• Automotive Tier 2 Supplier • Ontario, Canada',
//     desc: 'Newly promoted plant and quality leaders lacked the financial vocabulary to translate day-to-day operations into P&L impact. EVERSTONE provided hands-on coaching to prepare them for board-level reporting.',
//     metrics: [
//       { value: '8 wks', label: 'Coaching duration' },
//       { value: '100%', label: 'Board alignment' },
//       { value: '$240k', label: 'EBITDA impact' }
//     ],
//     link: '#/contact',
//     isSide: true
//   },
//   {
//     id: 'case-4',
//     category: 'OPERATIONAL DUE DILIGENCE',
//     title: 'Quality System Gaps Identified in Lender-Commissioned Operational Review of Food Manufacturer',
//     metadata: '• Food Processing • Midwest, USA',
//     desc: 'A regional bank engaged EVERSTONE ahead of a refinancing. Compliance exposure and warranty risk were surfaced that the financial audit had not captured  enabling restructured covenant terms before close.',
//     metrics: [
//       { value: '4', label: 'Compliance gaps' },
//       { value: '$1.1M', label: 'Warranty exposure' }
//     ],
//     link: '#/contact'
//   },
//   {
//     id: 'case-5',
//     category: 'BANKABILITY AUDIT',
//     title: 'Fabrication Business Prepares for Acquisition by Closing Operational Credibility Gaps Before Going to Market',
//     metadata: '• Metal Fabrication • Texas, USA',
//     desc: 'An owner preparing to sell engaged EVERSTONE to assess how a buyer or lender would read the factory and what needed to change to support a premium valuation.',
//     metrics: [
//       { value: '14', label: 'System improvements' },
//       { value: '+22%', label: 'Valuation improvement' }
//     ],
//     link: '#/contact'
//   },
//   {
//     id: 'case-6',
//     category: 'VALUE ASSESSMENT',
//     title: 'OEE Analysis Quantifies $900K in Recoverable EBITDA at Contract Manufacturer',
//     metadata: '• Contract Packaging • Ohio, USA',
//     desc: 'A strategic acquirer suspected throughput metrics were inconsistent with reported margins. EVERSTONE found a 67% gap between reported and actual OEE and $900K in recoverable annual margin.',
//     metrics: [
//       { value: '$900K', label: 'Recoverable EBITDA' },
//       { value: '67%', label: 'OEE gap found' }
//     ],
//     link: '#/contact'
//   },
//   {
//     id: 'case-7',
//     category: 'LEADERSHIP COACHING',
//     title: 'Quality Manager Develops Risk-Based Leadership Ahead of ISO 9001 Surveillance Audit',
//     metadata: '• Medical Devices • California, USA',
//     desc: 'A quality manager at a medical device contract manufacturer shifted from reactive inspection to proactive, risk-based quality leadership — with zero major nonconformities at audit.',
//     metrics: [
//       { value: '0', label: 'Major nonconformities' },
//       { value: '8 wks', label: 'Coaching duration' }
//     ],
//     link: '#/contact'
//   },
//   {
//     id: 'case-8',
//     category: 'BANKABILITY AUDIT',
//     title: 'Electronics Assembler Builds Evidence Package That Supports Customer Audit and New Program Award',
//     metadata: '• Electronics Manufacturing • Michigan, USA',
//     desc: 'A Tier 1 customer required an operational readiness review before awarding a new program. EVERSTONE built the factory evidence package and prepared the leadership team.',
//     metrics: [
//       { value: '$2.2M', label: 'New annual revenue' },
//       { value: '1', label: 'Program awarded' }
//     ],
//     link: '#/contact'
//   },
//   {
//     id: 'case-9',
//     category: 'OPERATIONAL DUE DILIGENCE',
//     title: 'Post-Acquisition Operational Risk Review Identifies Leadership Gaps Before 100-Day Plan Launch',
//     metadata: '• Industrial Products • Pennsylvania, USA',
//     desc: 'A PE-backed industrial business commissioned EVERSTONE 30 days post-close to validate operational assumptions and identify gaps before the value-creation plan launched.',
//     metrics: [
//       { value: '7', label: 'Priority risks found' },
//       { value: '100d', label: 'Plan restructured' }
//     ],
//     link: '#/contact'
//   }
// ];

// const defaultInsights: Insight[] = [
//   {
//     id: 'insight-1',
//     category: 'OPERATIONAL DUE DILIGENCE',
//     title: 'Why EBITDA Alone Cannot Tell You If a Factory Is Worth Buying',
//     desc: "A factory's income statement reflects past results. It says nothing about whether those results can be sustained, scaled, or repeated after ownership changes. The answer lives inside the factory's systems not its financial statements.",
//     link: '#/contact',
//     isTop: true
//   },
//   {
//     id: 'insight-2',
//     category: 'BANKABILITY',
//     title: 'Manufacturing Bankability: The Missing Link Between Operations and Capital',
//     desc: 'Lenders and Investors make capital allocation decisions based on financial data. But the operational systems that produce that data are rarely examined before capital is committed. That gap is bankability.',
//     link: '#/contact',
//     isTop: true
//   },
//   {
//     id: 'insight-3',
//     category: 'QUALITY & FINANCE',
//     title: 'Scrap Is Not a Quality Problem. It Is Margin Leakage.',
//     desc: 'Every unit scrapped is labor, material, and capacity that produced nothing shippable. Here is how to quantify it and why it belongs in the EBITDA conversation.',
//     link: '#/contact',
//     isTop: false
//   },
//   {
//     id: 'insight-4',
//     category: 'LENDERS',
//     title: 'Before You Finance a Factory, Study the System That Produces the Numbers',
//     desc: 'The financial statements a lender reviews are outputs of a system  and that system may be unreliable, undisciplined, or about to break down under the pressure of growth.',
//     link: '#/contact',
//     isTop: false
//   },
//   {
//     id: 'insight-5',
//     category: 'OPERATIONS',
//     title: 'Poor OEE Is Trapped Revenue. Here Is How to Quantify It.',
//     desc: "OEE is the most underused financial metric in manufacturing. If you're not converting OEE losses to dollars, you're leaving a powerful conversation tool on the floor.",
//     link: '#/contact',
//     isTop: false
//   }
// ];

// const defaultMessages: Message[] = [
//   {
//     id: 'msg-1',
//     name: 'Robert Henderson',
//     email: 'rhenderson@vanguard-cap.com',
//     company: 'Vanguard Capital Partners',
//     role: 'Managing Director',
//     interest: 'odd',
//     message: 'Evaluating a mid-market CNC machining facility next week. The EBITDA is reported at $4.2M. We suspect throughput constraints. Can you do a rapid operational due diligence assessment pre-close?',
//     date: '2026-06-05T14:32:00.000Z',
//     read: false
//   },
//   {
//     id: 'msg-2',
//     name: 'Sarah Chen',
//     email: 'schen@nexustronics.com',
//     company: 'Nexustronics Corp',
//     role: 'VP Operations',
//     interest: 'audit',
//     message: 'Preparing to raise a new $8M senior credit facility for factory expansion. The lender is expressing concern about our inventory turnover and scrap rate reporting. We need a bankability audit to bridge their confidence gap.',
//     date: '2026-06-06T09:15:00.000Z',
//     read: true
//   },
//   {
//     id: 'msg-3',
//     name: 'Marcus Vance',
//     email: 'mvance@apexcastings.com',
//     company: 'Apex Castings LLC',
//     role: 'CEO',
//     interest: 'coaching',
//     message: 'We recently promoted our lead technician to Plant Manager. He is technically excellent but has difficulty communicating operating issues to our board. Need leadership coaching that focuses on operations-to-EBITDA translation.',
//     date: '2026-06-06T18:45:00.000Z',
//     read: false
//   }
// ];

