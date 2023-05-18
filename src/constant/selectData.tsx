import AnyRoleIcon from '@/assets/icons/AnyRoleIcon';
import LocationIcon from '@/assets/icons/LocationNvIcon';
import BagSelectIcon from '@/assets/icons/BagSelectIcon';
import StarIcon from '@/assets/icons/StarIcon';
import ExperienceIcon from '@/assets/icons/ExperienceIcon';
import IndustryIcon from '@/assets/icons/IndustryIcon';
import StackIcon from '@/assets/icons/StackIcon';
import DateIcon from '@/assets/icons/DateIcon';

export interface IData {
  key: string;
  text: string;
  icon: JSX.Element;
}

export const roleSelect: IData[] = [
  {
    key: '',
    text: 'Any role',
    icon: <AnyRoleIcon />
  },
  {
    key: 'admin',
    text: 'Admin',
    icon: <AnyRoleIcon />
  }
];

export const locationSelect: IData[] = [
  {
    key: '',
    text: 'Location',
    icon: <LocationIcon />
  },
  {
    key: 'vn',
    text: 'Viet Nam',
    icon: <LocationIcon />
  }
];

export const jobSelect: IData[] = [
  {
    key: '',
    text: 'Any job',
    icon: <BagSelectIcon />
  },
  {
    key: 'vn',
    text: 'Viet Nam',
    icon: <BagSelectIcon />
  }
];


export const positionSelect: IData[] = [
  {
    key: '',
    text: 'Position',
    icon: <AnyRoleIcon />
  },
  {
    key: 'vn',
    text: 'Viet Nam',
    icon: <AnyRoleIcon />
  }
];

export const levelSelect: IData[] = [
  {
    key: '',
    text: 'Level',
    icon: <StarIcon />
  },
  {
    key: 'vn',
    text: 'Viet Nam',
    icon: <StarIcon />
  }
];

export const experienceSelect: IData[] = [
  {
    key: '',
    text: 'Experience',
    icon: <ExperienceIcon />
  },
  {
    key: 'vn',
    text: 'Viet Nam',
    icon: <ExperienceIcon />
  }
];

export const industrySelect: IData[] = [
  {
    key: '',
    text: 'Industry',
    icon: <IndustryIcon />
  },
  {
    key: 'vn',
    text: 'Viet Nam',
    icon: <IndustryIcon />
  }
];

export const salarySelect: IData[] = [
  {
    key: '',
    text: 'Salary range',
    icon: <StackIcon />
  },
  {
    key: 'vn',
    text: 'Viet Nam',
    icon: <StackIcon />
  }
];

export const dateSelect: IData[] = [
  {
    key: '',
    text: 'Posted date',
    icon: <DateIcon />
  },
  {
    key: 'vn',
    text: 'Viet Nam',
    icon: <DateIcon />
  }
];