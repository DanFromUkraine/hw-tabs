
const index = ({content: {label, text_content}}) => {
  return (
    <div>
        <h1 className="text-2xl">{label}</h1>
        <p>{text_content}</p>
    </div>
  )
}

export default index