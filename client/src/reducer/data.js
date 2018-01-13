export default function(state = [], action) {
  switch (action.type) {
    case 'ALL_DATA':
      return action.data;
    case 'IMG':
    console.log('inreducer')
      return action.imgData
    default:
      return state;
  }
}
