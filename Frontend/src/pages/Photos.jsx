import PhotoCard from '../components/PhotoCard'
import ImageFilter from '../components/ImageFilter'

import image1 from '../photos/DSC_0192_edited.jpg'
import image3 from '../photos/DSC_0230_edited.jpg'
import image4 from '../photos/DSC_0240_edited.jpg'
import image5 from '../photos/DSC_0259_edited.jpg'
import image6 from '../photos/DSC_0262_edited.jpg'
import image7 from '../photos/DSC_0283_edited.jpg'

const Photos = () => {
    return (
        <div>
            <ImageFilter />
            <div className='photo-grid'>
                <PhotoCard photo={{ url: image1, title: 'Tree' }} />
                <PhotoCard photo={{ url: image3, title: 'Ocean View' }} />
                <PhotoCard photo={{ url: image4, title: 'Bird' }} />
                <PhotoCard photo={{ url: image5, title: 'Blue Mountains' }} />
                <PhotoCard photo={{ url: image6, title: 'Mountain Bush' }} />
                <PhotoCard photo={{ url: image7, title: 'Cat' }} />
            </div>
        </div>
    )
}

export default Photos