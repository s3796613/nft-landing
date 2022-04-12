import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of NFTs. Start Selling & Buying meme in oneclick"
        description="Collect NFTs, earn rewards by crypto. Join 25+ million people using VNFT Marketplace"
        showBtn 
        mockUpImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Friendly User Interface"
        description="Easy to buy and sell your NFT assests, elegant design and simple navigation."
        mockUpImg={assets.homeCards}
        reverse
      />
      <Features/>
      <SectionWrapper
        title="Big Rewards"
        description="When buying NFT, you will receive a random mystery box."
        mockUpImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="A secure marketplace"
        description="Your exchange information will be encrypted using advanced technologies"
        mockUpImg={assets.mockup}
        banner='banner02'
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made by following the tutorial of {" "}
          <span className="bold">JavaScriptMastery</span>
        </p>
      </div>
    </>
  );
}

export default App;
