import {Link} from "react-router-dom";


const SocialItem = ({item}) => {
  return (
      <li><Link to="/"><img src={item} alt={item}/></Link></li>
  );
};

export default SocialItem;