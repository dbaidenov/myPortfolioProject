import githubIcon from "./gitHub-black.svg";

const BtnGitHub = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="btn-outline"
    >
      <img src={githubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
