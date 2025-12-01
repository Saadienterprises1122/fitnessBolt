interface DumbbellIconProps {
    className?: string;
}

const DumbbellIcon: React.FC<DumbbellIconProps> = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m6.5 6.5 11 11" /><path d="m21 21-1-1" /><path d="m3 3 1 1" /><path d="m18 22 4-4" /><path d="m2 6 4-4" /><path d="m3 10 7.9-7.9c.7-.7 1.8-.7 2.5 0l2.5 2.5c.7.7.7 1.8 0 2.5L7.9 15" /><path d="m21 14-7.9 7.9c-.7.7-1.8.7-2.5 0l-2.5-2.5c-.7-.7-.7-1.8 0-2.5L16 9" />
    </svg>
);

export default DumbbellIcon;
