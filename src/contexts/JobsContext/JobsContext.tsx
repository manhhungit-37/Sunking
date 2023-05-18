import { createContext, useContext, useReducer } from 'react';
import { jobsReducer, Action } from './jobsReducer';
import { initialData, AppData } from './initialData';

export const JobsContext = createContext<AppData | null>(null);
export const JobsDispatchContext = createContext<React.Dispatch<Action> | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

export const JobsProvider = ({ children }: Props) => {
  const [jobs, dispatch] = useReducer(jobsReducer, initialData);

  return (
    <JobsContext.Provider value={jobs}>
      <JobsDispatchContext.Provider value={dispatch}>
        {children}
      </JobsDispatchContext.Provider>
    </JobsContext.Provider>
  );
};

export const useJobs = () => {
  return useContext(JobsContext);
};

export const useJobsDispatch = () => {
  return useContext(JobsDispatchContext);
};
