import rishiWorking from "../images/rishiImage.jpeg"
export function RishiPhoto() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <img
                src={rishiWorking}
                alt="Rishi"
                style={{height: '50vh'}}
            />
        </div>
    )
}