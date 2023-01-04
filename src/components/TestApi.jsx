// import React, {useEffect} from 'react';
// import axios from "axios";
//
// function TestApi() {
// const API_KEY = "1d925b504a9d2eab00eb33c578d4bdd1"
//
// const [ data, setData ] = useState( [] )
// const [ loading, setLoading ] = useState( false )
// const [ error, setError ] = useState( false )
//
// useEffect( () => {
//     async function fetchData() {
//         setError( false )
//         try {
//             setLoading( true )
//             const response = await axios.get( 'https://api.scripture.api.bible/v1/bibles', {
//                 headers: {
//                     'api-key': API_KEY,
//                 }
//             } )
//             setData( response.data )
//             console.log( response.data )
//         } catch ( e ) {
//             if ( axios.isCancel( e ) ) {
//                 console.log( 'The axios request was cancelled' )
//             } else {
//                 console.error( e )
//                 setError( true )
//             }
//         } finally {
//             setLoading( false )
//         }
//     }
//
//     void fetchData()
//
// }, [] )
//
//     return (
//         <div></div>
//     );
// }
//
// export default TestApi;
