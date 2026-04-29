const Section = ({ head, data = [] }) => (
    <div className="flex flex-col gap-5">
        <h3 className="text-2xl font-bold">{head}</h3>
        <div className="text-gray-600 flex flex-col gap-3">{data.map((el, i) => ( <a href="/" key={i}>{el}</a> ))}</div>
    </div>
)

export default Section