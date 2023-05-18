import { useMemo } from 'react';

function useContain(str: string) {
  const isContainNumber = useMemo(() => /\d/.test(str), [str]);
  const isContainUppercase = useMemo(() => /[A-Z]/.test(str), [str]);
  const isContainUnique = useMemo(() => /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str), [str]);

  return { isContainNumber, isContainUppercase, isContainUnique };
};

export default useContain;