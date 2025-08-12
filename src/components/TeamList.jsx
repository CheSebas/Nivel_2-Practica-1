import TeamCard from "./TeamCard";

function TeamList(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {props.members.map(function (member, index) {
        return (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        );
      })}
    </div>
  );
}

export default TeamList;
