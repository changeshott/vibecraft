import { loadIcon } from '@iconify/react';
(async () => {
  const icons = ['simple-icons:nextdotjs', 'simple-icons:vite', 'simple-icons:tailwindcss', 'simple-icons:shadcnui', 'simple-icons:lucide', 'simple-icons:framer', 'simple-icons:supabase', 'simple-icons:vercel', 'simple-icons:cursor', 'simple-icons:windsurf', 'simple-icons:anthropic'];
  for (const i of icons) {
    try {
      const res = await loadIcon(i);
      console.log(i, !!res);
    } catch {
      console.log(i, false);
    }
  }
})();
