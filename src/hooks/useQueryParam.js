import { useMemo } from 'react';

export default function useQueryParam(name) {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  return params.get(name);
}
