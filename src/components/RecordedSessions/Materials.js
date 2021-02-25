// example import: "import INSERTNAME from './Thumbnails/fileName.png/jpg';"
import presentationImg from './Thumbnails/sankofapresentation.png';
import recordingImg from './Thumbnails/recordedsession.png';

export const PresentationData = [
  /* EXAMPLE:
  {
    title: "Insert Title Here",
    thumbnail: INSERTNAME (see above)
    url: "url"
  },
  */
  {
    title: "Introduction",
    thumbnail: presentationImg,
    url: "https://drive.google.com/file/d/1d5lCCZnUc2iif8fBGYsiWJDrWxFM7CYX/view?usp=sharing",
  },
]

export const RecordingData = [
  {
    date: "2/24/2021",
    thumbnail: recordingImg,
    url: "https://google.com"
  },
  
]

export default {
  PresentationData, RecordingData
}