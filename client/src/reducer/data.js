
export default function ( state=[],action ) {
    switch (action.type) {
      case 'ALL_DATA':
        return action.data;
      default:
        return state;
    }
  }  