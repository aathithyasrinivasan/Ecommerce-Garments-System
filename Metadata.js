import {Helmet} from 'react-helmet-async';
export default function Metadata({title}){
    return(
        <Helmet>
            <title>{`${title} -TrendsKart`}</title>
        </Helmet>
    );
}
 