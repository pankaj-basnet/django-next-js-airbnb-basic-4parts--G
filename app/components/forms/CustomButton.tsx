interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) => {
    return (
        <div 
            onClick={onClick}
            className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark text-stone-500 border-teal-500 border-2 text-center rounded-xl transition cursor-pointer ${className}`}
        >
            {label}
        </div>
    )
}

export default CustomButton;