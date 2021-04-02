import { useEffect, useState } from "react";

function MicroFrontend({ name, host, history }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    const renderMicroFrontend = () => {
      window[`render${name}`](`${name}-container`, history);
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        setIsLoaded(true);
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;
        script.onload = () => {
          renderMicroFrontend();
        };
        document.head.appendChild(script);
      });

    return () => {
      window[`unmount${name}`] && window[`unmount${name}`](scriptId);
      // window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };
  }, []);

  return (
    <>
      {isLoaded ? (
        <main id={`${name}-container`} />
      ) : (
        <p>{name}을 로드하는데 실패함</p>
      )}
    </>
  );
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
