import {SocialList} from "./nav"

import DiscordIcon from '/icons/social_icons/discord.svg'
import TwitterIcon from '/icons/social_icons/twitter.svg'
import InstagramIcon from '/icons/social_icons/instagram.svg'
import GithubIcon from '/icons/social_icons/github.svg'


export function Slider() {
   
      return (
  
  <>
  
  {/* ------------ */}
  
        <ul className='slider-ul'>
  
          <SocialList
            socialLinkLi="https://discord.com"  /*a href */
            iconLinkLi={DiscordIcon}   /*img src */
            altLi="Enlace a mi Discord"    /*alt => img */
          />
  
          <SocialList
            socialLinkLi="https://twitter.com/?lang=es"  /*a href */
            iconLinkLi={TwitterIcon}   /*img src */
            altLi="Enlace a mi Twitter"    /*alt => img */
          />
  
          <SocialList
            socialLinkLi="https://www.instagram.com"  /*a href */
            iconLinkLi={InstagramIcon}    /*img src */
            altLi="Enlace a mi Instagram"    /*alt => img */
          />
  
          
          <SocialList
            socialLinkLi="https://github.com"  /*a href */
            iconLinkLi={GithubIcon}     /*img src */
            altLi="Enlace a mi Github"    /*alt => img */
          />
  
    
        </ul>
  
  </> 
      )
  }

