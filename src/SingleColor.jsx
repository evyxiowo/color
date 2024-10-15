import { toast } from "react-toastify";

const SingleColor = ({index, color}) => {
    const {hex, weight } =color;
    const saveTo = async () => {
        if(navigator.clipboard){
            try {
                await navigator.clipboard.writeText(`#${hex}`)
                toast.success('Color copied to clipboard')
            } catch (error) {
                toast.error('Failed to copy')
            }
        }
    }

  return (
    <article style={{background: `#${hex}`}} onClick={saveTo}>
        <p>{weight}%</p>
        <p>#{hex}</p>
    </article>
  )
}
export default SingleColor