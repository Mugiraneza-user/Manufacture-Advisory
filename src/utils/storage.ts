
import { getAuthToken } from './auth';
// const API_BASE = 'http://localhost:8000/api';
 const API_BASE = import.meta.env.VITE_API_URL || 'https://backendmanufacture-production.up.railway.app/api';



async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API error ${response.status}: ${errorText}`);
  }
  return response.json();
}

/** CASE STUDIES */
let caseStudiesCache: CaseStudy[] | null = null;
async function refreshCaseStudies() {
  try {
    const token = getAuthToken();

    const res = await fetch(`${API_BASE}/case-studies/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    caseStudiesCache = await handleResponse<CaseStudy[]>(res);
  } catch (err) {
    console.error("Failed to refresh case studies:", err);
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  // Return cached data immediately
  if (caseStudiesCache) {
    refreshCaseStudies(); // Refresh in the background
    return caseStudiesCache;
  }

  // First load from the API
  const token = getAuthToken();

  const res = await fetch(`${API_BASE}/case-studies/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });

  caseStudiesCache = await handleResponse<CaseStudy[]>(res);

  return caseStudiesCache;
}
// export async function getCaseStudies(): Promise<CaseStudy[]> {

//   const token = getAuthToken()
//   const res = await fetch(`${API_BASE}/case-studies/`, {
//     headers: { 'Content-Type': 'application/json', Authorization: `Token ${token}`, },
//   });
//   return handleResponse<CaseStudy[]>(res);
// }

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
// export async function getInsights(): Promise<Insight[]> {
//   const token = getAuthToken()
//   const res = await fetch(`${API_BASE}/insights/`, {
//     headers: { Authorization: `Token ${token}` }
//   }

//   );
//   return handleResponse<Insight[]>(res);

// }
let insightsCache: Insight[] | null = null;
export async function getInsights() {
  if (insightsCache) {
    // Return cached data immediately
    refreshInsights();
    return insightsCache;
  }

  const res = await fetch(`${API_BASE}/insights/`);
  insightsCache = await handleResponse<Insight[]>(res);
  return insightsCache;
}

async function refreshInsights() {
  try {
    const res = await fetch(`${API_BASE}/insights/`);
    insightsCache = await handleResponse<Insight[]>(res);
  } catch {
    // Ignore refresh errors
  }
}
export async function addInsight(data: Omit<Insight, 'id'|'created_at'>): Promise<Insight> {
  const token = getAuthToken()
  const res = await fetch(`${API_BASE}/insights/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Token ${token}` },
    body: JSON.stringify(data),
  });
  return handleResponse<Insight>(res);
}

export async function updateInsight(id: number, data: Partial<Omit<Insight, 'id'>>): Promise<Insight> {
  const token = getAuthToken()
  const res = await fetch(`${API_BASE}/insights/${id}/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Token ${token}` },
    body: JSON.stringify(data),
  });
  return handleResponse<Insight>(res);
}

export async function deleteInsight(id: number): Promise<void> {
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
  id: number;
  category: string;
  title: string;
  desc: string;
  link: string;
  isTop: boolean;
  created_at: string; // True for the top row (dark cards), false for the bottom row (white cards)
}
export type CreateInsight = Omit<Insight, "id" | "created_at">;
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

