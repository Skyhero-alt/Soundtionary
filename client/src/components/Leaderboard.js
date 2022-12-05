import { hop } from "@onehop/client";
 
// hop.init should be called as early as possible in your application's lifecycle
const client = hop.init({
	projectId: process.env.PROJ_ID // replace with your project ID
});

client.on('CONNECTION_STATE_UPDATE', (state) => {
  if (state === "connected") {
      // once connected, subscribe to a channel
      client.subscribeToChannel("test");
  }
});

const check = ()=>{
  client.on("MESSAGE", ({channel, event, data}) =>{
      return data;
  });
}

const Leaderboard = () => {

  return (
    <div class="card bg-base-300 w-1/3 m-3">
      <div className="card-body">
        <h2 class="font-bold">Time remaining:</h2>
        {/* <span class="countdown">
          <span style="--value: 10"></span>
        </span> */}
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>Score</th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
