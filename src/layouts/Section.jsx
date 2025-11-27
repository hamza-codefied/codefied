const Section = ({
    classNames,
    width = 'w-full',
    height = '',
    background = '',
    color = 'text-gray-900',
    padding = 'p-4',
    margin = 'mb-4',
    minHeight = 'min-h-screen',
    children,
    ...rest
}) => {
    return (
        <section
            className={`${classNames} ${width} ${height} ${background} ${color} ${padding} ${margin} ${classNames ?? ''}`}
            {...rest}
        >
            {children}
        </section>
    )
};

export default Section