type HeadingProps = {
    heading: string,
    subheading: string
}
export default function SectionHeadings({ heading, subheading }: HeadingProps) {
    return (
        <div className="flex flex-col gap-6 lg:max-w-[80%]">
            <h3 className="instrument-sans text-lg text-sleekWhite/80">{heading}</h3>
            <p className="text-sleekWhite text-3xl lg:text-4xl">{subheading}</p>
        </div>
    )
}
