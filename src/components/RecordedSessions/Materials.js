// example import: "import INSERTNAME from './Thumbnails/fileName.png/jpg';"
import presentationImg from './Thumbnails/sankofapresentation.png';
import recordingImg from './Thumbnails/recordedsession.png';
import recordingImg2 from './Thumbnails/SafeBlackSpaceimg.JPG';

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
    url: "https://ucdavis.box.com/s/ljlz8mfb4hcsfh19zi5kfqr9i4ulb2cw"
  },
  */
  {
    title: "Safe Black Space Presentation",
    thumbnail: recordingImg2,
    url: "https://ucdavis.app.box.com/file/830938210924"
  }
]

export default {
  PresentationData, RecordingData
}
