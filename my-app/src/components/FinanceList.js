import FinanceCard from "./FinanceCard";

function FinanceList({ data }) {
    return (
        <div className="card-list">
            <h2 className="component-name">Finance Profiles</h2>
            <br />

            {[...data].map(formInfo => {
                return (
                    <FinanceCard
                        key={formInfo.id}
                        name={formInfo.name}
                        age={formInfo.age}
                        income={formInfo.income}
                        occupation={formInfo.occupation}
                        interests={formInfo.interests}
                        profile_pic={formInfo.profile_pic}
                    />
                );
            })}
        </div>
    )
}

export default FinanceList