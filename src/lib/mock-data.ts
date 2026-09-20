export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  isPro: boolean;
}

export interface ItemType {
  id: string;
  name: string;
  icon: string;
  color: string;
  isSystem: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  color: string;
  itemCount: number;
  isFavorite: boolean;
  typeIds: string[];
  updatedAt: string;
}

export interface Item {
  id: string;
  title: string;
  description: string;
  typeId: string;
  collectionId: string | null;
  content: string | null;
  url: string | null;
  language: string | null;
  tags: string[];
  isFavorite: boolean;
  isPinned: boolean;
  updatedAt: string;
}

export const mockUser: User = {
  id: "user_1",
  name: "John Doe",
  email: "demo@devstash.io",
  avatarUrl: null,
  isPro: true,
};

export const mockItemTypes: ItemType[] = [
  { id: "snippet", name: "Snippets", icon: "Code", color: "#3b82f6", isSystem: true },
  { id: "prompt", name: "Prompts", icon: "Sparkles", color: "#a855f7", isSystem: true },
  { id: "command", name: "Commands", icon: "Terminal", color: "#f97316", isSystem: true },
  { id: "note", name: "Notes", icon: "FileText", color: "#eab308", isSystem: true },
  { id: "file", name: "Files", icon: "File", color: "#94a3b8", isSystem: true },
  { id: "image", name: "Images", icon: "Image", color: "#ec4899", isSystem: true },
  { id: "link", name: "Links", icon: "Link", color: "#22c55e", isSystem: true },
];

export const mockCollections: Collection[] = [
  {
    id: "col_react_patterns",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    color: "#3b82f6",
    itemCount: 12,
    isFavorite: true,
    typeIds: ["snippet", "note", "link"],
    updatedAt: "2026-01-15T10:24:00.000Z",
  },
  {
    id: "col_python_snippets",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    color: "#60a5fa",
    itemCount: 8,
    isFavorite: false,
    typeIds: ["snippet", "note"],
    updatedAt: "2026-01-14T16:02:00.000Z",
  },
  {
    id: "col_context_files",
    name: "Context Files",
    description: "AI context files for projects",
    color: "#e2e8f0",
    itemCount: 5,
    isFavorite: true,
    typeIds: ["file", "note"],
    updatedAt: "2026-01-13T09:40:00.000Z",
  },
  {
    id: "col_interview_prep",
    name: "Interview Prep",
    description: "Technical interview preparation",
    color: "#eab308",
    itemCount: 24,
    isFavorite: false,
    typeIds: ["note", "snippet", "link", "prompt"],
    updatedAt: "2026-01-12T18:15:00.000Z",
  },
  {
    id: "col_git_commands",
    name: "Git Commands",
    description: "Frequently used git commands",
    color: "#f97316",
    itemCount: 15,
    isFavorite: true,
    typeIds: ["command", "note"],
    updatedAt: "2026-01-11T11:05:00.000Z",
  },
  {
    id: "col_ai_prompts",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    color: "#a855f7",
    itemCount: 18,
    isFavorite: false,
    typeIds: ["prompt", "snippet", "note"],
    updatedAt: "2026-01-10T14:30:00.000Z",
  },
];

export const mockItems: Item[] = [
  {
    id: "item_use_auth_hook",
    title: "useAuth Hook",
    description: "Custom authentication hook for React applications",
    typeId: "snippet",
    collectionId: "col_react_patterns",
    content:
      "export function useAuth() {\n  const [user, setUser] = useState<User | null>(null);\n  return { user, setUser };\n}",
    url: null,
    language: "typescript",
    tags: ["react", "auth", "hooks"],
    isFavorite: true,
    isPinned: true,
    updatedAt: "2026-01-15T10:24:00.000Z",
  },
  {
    id: "item_api_error_handling",
    title: "API Error Handling Pattern",
    description: "Fetch wrapper with exponential backoff retry logic",
    typeId: "snippet",
    collectionId: "col_react_patterns",
    content:
      "async function fetchWithRetry(url: string, retries = 3) {\n  // exponential backoff\n}",
    url: null,
    language: "typescript",
    tags: ["api", "fetch", "errors"],
    isFavorite: false,
    isPinned: true,
    updatedAt: "2026-01-12T08:50:00.000Z",
  },
  {
    id: "item_code_review_prompt",
    title: "Code Review Prompt",
    description: "Ask an LLM for a focused review of a diff",
    typeId: "prompt",
    collectionId: "col_ai_prompts",
    content:
      "Review this diff for correctness, edge cases and security issues. Be specific and cite line numbers.",
    url: null,
    language: null,
    tags: ["ai", "review"],
    isFavorite: false,
    isPinned: false,
    updatedAt: "2026-01-10T14:30:00.000Z",
  },
  {
    id: "item_git_reset",
    title: "Undo Last Commit",
    description: "Reset the last commit but keep the changes staged",
    typeId: "command",
    collectionId: "col_git_commands",
    content: "git reset --soft HEAD~1",
    url: null,
    language: "bash",
    tags: ["git", "reset"],
    isFavorite: true,
    isPinned: false,
    updatedAt: "2026-01-11T11:05:00.000Z",
  },
  {
    id: "item_project_overview_context",
    title: "project-overview.md",
    description: "Project context file handed to the AI at session start",
    typeId: "file",
    collectionId: "col_context_files",
    content: null,
    url: null,
    language: null,
    tags: ["context", "docs"],
    isFavorite: false,
    isPinned: false,
    updatedAt: "2026-01-09T12:00:00.000Z",
  },
  {
    id: "item_big_o_cheatsheet",
    title: "Big-O Cheatsheet",
    description: "Time and space complexity for common data structures",
    typeId: "note",
    collectionId: "col_interview_prep",
    content: "Array access O(1), search O(n). Hash map access O(1) average.",
    url: null,
    language: null,
    tags: ["interview", "algorithms"],
    isFavorite: false,
    isPinned: false,
    updatedAt: "2026-01-08T19:20:00.000Z",
  },
  {
    id: "item_react_docs",
    title: "React Docs — Hooks Reference",
    description: "Official reference for the built-in React hooks",
    typeId: "link",
    collectionId: "col_react_patterns",
    content: null,
    url: "https://react.dev/reference/react/hooks",
    language: null,
    tags: ["react", "docs"],
    isFavorite: false,
    isPinned: false,
    updatedAt: "2026-01-07T15:45:00.000Z",
  },
  {
    id: "item_list_comprehension",
    title: "List Comprehension Recipes",
    description: "Common Python list comprehension patterns",
    typeId: "snippet",
    collectionId: "col_python_snippets",
    content: "squares = [n * n for n in range(10) if n % 2 == 0]",
    url: null,
    language: "python",
    tags: ["python"],
    isFavorite: false,
    isPinned: false,
    updatedAt: "2026-01-06T10:10:00.000Z",
  },
];

export const mockItemTypeCounts: Record<string, number> = {
  snippet: 24,
  prompt: 18,
  command: 15,
  note: 12,
  file: 5,
  image: 3,
  link: 8,
};
