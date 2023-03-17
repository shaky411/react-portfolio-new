import { useEffect, useState } from "react";

export default function GitWidget() {
  const [githubData, setGithubData] = useState([]);
  const [githubUser, setGithubUser] = useState("github");

  // API Call
  const fetchData = async () => {
    const response = await fetch(`https://api.github.com/users/${githubUser}`);
    const data = await response.json();
    return setGithubData(data);
    // console.log(data)
  };

  // eslint-disable-next-line
  let twitterLink = "https://twitter.com/" + `${githubData.twitter_username}`;

  // Add API call to use effect
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [githubUser]);

  return (
    <div className="mt-12 mb-14 flex flex-col max-w-lg m-12 items-center">
      <i className="fa-brands fa-github-alt text-5xl text-slate-500 mb-1"></i>
      <h1 className="mb-6 text-slate-500 text-3xl">Github Stats</h1>

      <div className="flex flex-col max-h-50 md:flex-row shadow-lg shadow-indigo-500/40 rounded-xl md:rounded-l-xl">
        <div className="bg-[#2A303C] p-5 border border-slate-500 md:rounded-l-xl">
          <div className="stat-figure text-secondary">
            <img
              src={githubData.avatar_url}
              alt="ffff"
              className="w-10 rounded-lg hover:scale-125 transition-scale duration-500 mb-2"
            />
          </div>
          <div className="text-slate-200">Name</div>
          <p className="stat-value text-indigo-400 text-3xl font-bold">
            {githubData.name}
          </p>
          <div className="text-sm text-slate-400 hover:text-green-500 mt-2">
            <i className="fa-brands fa-twitter mr-1 text-blue-500"></i>
            <a href={twitterLink}>{githubData.twitter_username}</a>
          </div>

          <div className="text-sm flex justify-center items-center text-slate-400 mt-2">
            <i className="fa-solid fa-location-dot mr-3 text-blue-500"></i>
            <p>{githubData.location}</p>
          </div>
        </div>

        <div className="bg-[#2A303C] p-5 border border-slate-500">
          <div className="stat-figure text-secondary">
            <i className="fa-solid fa-code-branch text-[#D827AA] text-4xl mb-2"></i>
          </div>
          <div className="text-slate-200">Followers</div>
          <div className="stat-value text-slate-400 text-3xl font-bold">
            {githubData.followers}
          </div>
          <a href={githubData.html_url} className="text-slate-400 text-sm">
            <div className="mt-2 text-pink-500 hover:text-green-500">
              Github URL
            </div>
          </a>
        </div>

        <div className="bg-[#2A303C] p-5 border border-slate-500 md:rounded-r-xl">
          <div className="stat-figure text-secondary">
            <i className="fa-solid fa-code-merge text-[#D827AA] text-4xl mb-2"></i>
          </div>
          <div className="text-white">Public Repos</div>
          <div className="stat-value text-green-500 text-3xl font-bold">
            {githubData.public_repos}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col mt-12">
        <input
          type="text"
          placeholder="Github username"
          onChange={(e) => setGithubUser(e.target.value)}
          className="mb-4 p-2 border placeholder:text-gray-300 shadow-inner rounded-lg"
        />
        <button
          onClick={fetchData}
          className="shadow-lg bg-indigo-500 hover:bg-pink-500 p-2 rounded-lg text-white active:bg-green-500 focus:outline-none focus:ring focus:ring-indigo-500"
        >
          Search Github
        </button>
      </div> */}

      <form
      className="mt-10"
      name="user"
        onSubmit={(event) => {
          event.preventDefault();

          setGithubUser(event.target["githubUser"].value);
          event.target.reset();
          
        }}
      >
        <input type="text" name="githubUser" placeholder="Github UserName" className="mb-4 p-2 border placeholder:text-gray-300 shadow-inner rounded-lg"/>
        <button className="shadow-lg bg-indigo-500 hover:bg-pink-500 p-2 px-4 ml-5 rounded-lg text-white active:bg-green-500 focus:outline-none focus:ring focus:ring-indigo-500">Submit</button>
      </form>

      {/* 
      <p className="text-white mt-4">{githubData.name}</p>
      {/* <a className="text-white mt-4">{githubData.url}</a> */}
      {/* <a className="text-white" href="#">{githubData.url}</a> */}

      {/* <img src={githubUser.avatar_url} alt="" height="100" width="100" /> */}

      {/* <div className="text-white mt-12">
        {data && data.map((userData) => {
          return <div key={userData.id}>{userData.email}</div>;
        })}
      </div> */}
    </div>
  );
}

// const fetchData = async () => {
//   const response = await fetch(`https://api.github.com/users/${githubUser}`, {
//     headers: {
//       'Authorization': 'token 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'
//     }
//   });
//   const data = await response.json();
//   return setGithubData(data);
//   // console.log(data)

// };
