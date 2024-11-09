export interface SkillItemsTypes {
  skills: string;
  percentage: string;
}
export interface SkillsTypes {
  title: string;
  icon: string;
  skills: SkillItemsTypes[];
}
export interface SkillsCardPropsTypes {
  iconUrl: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}
export interface SkillInfoCardTypes {
  heading: string;
  skills: SkillItemsTypes[];
}
export interface WorkExperienceTypes {
  title: string;
  date: string;
  responsibilities: string[];
}
export interface DetailPropsType {
  detail: WorkExperienceTypes;
}
export interface ContactInfoCardTypes {
  iconUrl: string;
  text: string;
}
export interface MobileNavbarTypes {
  isOpen: boolean;
  toggleMenu: () => void;
}
