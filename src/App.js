import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import SocialProfile from './components/SocialProfile/SocialProfile';
import Statistics from './components/StatisticalData/StatisticalData';
import FriendList from './components/Friends/FriendList';

export default function App() {
  return (
    <div>
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />
    </div>
  );
}
