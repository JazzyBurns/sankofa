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
  // if you want to display a title instead of a date, replace the date string
  // with the title; ex:
  // date: "4/28/2021" ----> date: "Safe Black Space Presentation"
  {
    date: "2/24/2021",
    thumbnail: recordingImg,
    url: "https://ucdavis.box.com/s/ljlz8mfb4hcsfh19zi5kfqr9i4ulb2cw"
  },
  {
    title: "Safe Black Space Presentation",
    date: "4/28/2021",
    thumbnail: recordingImg2,
    url: "https://ucdavis.box.com/s/i9f8wttf54w0ohk30xeb22txjqldc1jb"
  }
]

export default {
  PresentationData, RecordingData
}
