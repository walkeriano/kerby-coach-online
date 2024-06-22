import stylesLoading from "./loading.module.css";

export default function Loading() {
  return (
    <div className={stylesLoading.contLoading}>
      <img
        src="/images/logo-kerby-coach-vertical.svg"
        alt="logo-kerby-coach"
        className={stylesLoading.logoKerby}
      />
      <div className={stylesLoading.ldsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
