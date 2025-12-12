import { NavLink, SocialLink, BlogPost } from './types';

export const PHONE_NUMBER = "+1 (510)-370-1986";
export const PHONE_NUMBER_CLEAN = "15103701986"; // Used in URLs and tel links

export const MANDATORY_DISCLOSURE = "We are an independent support provider and are NOT affiliated with or endorsed by McAfee or any antivirus manufacturer.";

export const COMMON_ISSUES: string[] = [
  "McAfee Safe Connect will not work",
  "McAfee says no internet connection",
  "McAfee VPN keeps disconnecting",
  "McAfee not loading",
  "McAfee not connecting to internet",
  "McAfee VPN won’t connect",
  "Why doesn't McAfee VPN work",
];

export const NAV_LINKS: NavLink[] = [
  { path: '/', name: 'Home' },
  { path: `/about-mcafee-support-${PHONE_NUMBER_CLEAN}`, name: 'About' },
  { path: `/mcafee-services-support-${PHONE_NUMBER_CLEAN}`, name: 'Services' },
  { path: `/blog-mcafee-support-${PHONE_NUMBER_CLEAN}`, name: 'Blog' },
  { path: `/contact-mcafee-support-${PHONE_NUMBER_CLEAN}`, name: 'Contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', icon: 'M13.196 11.35H11.2V16h-2.152V11.35H7.72V9.45h1.328V8.046c0-1.254.722-1.956 2.053-1.956h1.751v1.89h-1.07c-.551 0-.66.25-.66.634v.936h1.687l-.234 1.9h-1.453Z', url: 'https://facebook.com' },
  { name: 'Twitter', icon: 'M18.237 9.297a7.252 7.252 0 0 1-2.071.564 3.639 3.639 0 0 0 1.589-1.996 7.26 7.26 0 0 1-2.3.879 3.631 3.631 0 0 0-6.19 3.316c-3.01-.15-5.684-1.597-7.47-3.793a3.636 3.636 0 0 0 1.125 4.847 3.623 3.623 0 0 1-1.644-.454v.045c0 1.777 1.267 3.257 2.94 3.593a3.64 3.64 0 0 1-1.643.064c.467 1.455 1.815 2.518 3.41 2.546-1.258.985-2.846 1.571-4.568 1.571-.297 0-.59-.017-.88-.052a10.27 10.27 0 0 0 5.56 1.637c6.669 0 10.316-5.523 10.316-10.317 0-.157-.004-.313-.01-.468a7.407 7.407 0 0 0 1.81-1.879Z', url: 'https://twitter.com' },
  { name: 'LinkedIn', icon: 'M18.84 0H1.16C.52 0 0 .52 0 1.16v17.68C0 19.48.52 20 1.16 20h17.68c.64 0 1.16-.52 1.16-1.16V1.16C20 .52 19.48 0 18.84 0ZM6 17.5H3.5V7.5H6v10ZM4.75 6.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM17 17.5h-2.5V11c0-1.38-.5-2.32-1.83-2.32-1 0-1.74.67-2 1.33v8.49H8.5V7.5h2.5v1.07c.33-.51.9-.9 2.07-.9 2.07 0 3.43 1.35 3.43 4.25v7.09Z', url: 'https://linkedin.com' },
];

export const DUMMY_BLOG_POSTS: BlogPost[] = [
  {
    slug: `mcafee-vpn-disconnecting-fix-${PHONE_NUMBER_CLEAN}`,
    title: `Fix: McAfee VPN Keeps Disconnecting – Call ${PHONE_NUMBER}`,
    metaDescription: `Troubleshooting steps for McAfee VPN disconnecting. Get independent support by calling ${PHONE_NUMBER}.`,
    imageUrl: 'https://picsum.photos/600/400?random=1',
    content: `
      <p>Is your McAfee VPN constantly disconnecting, leaving your online activities exposed? This is a common and frustrating issue for many users. Understanding the potential causes can help you troubleshoot and find a solution.</p>
      <h3>Common Causes for Disconnections:</h3>
      <ul>
        <li><strong>Unstable Internet Connection:</strong> A fluctuating Wi-Fi signal or an unreliable wired connection can lead to VPN drops.</li>
        <li><strong>Firewall or Antivirus Conflicts:</strong> Sometimes, your operating system's firewall or other antivirus software can interfere with McAfee VPN's operation.</li>
        <li><strong>Server Overload:</strong> The VPN server you're connected to might be experiencing high traffic, leading to instability.</li>
        <li><strong>Outdated Software:</strong> An outdated McAfee VPN client or operating system can cause compatibility issues.</li>
        <li><strong>Network Restrictions:</strong> Certain networks (e.g., public Wi-Fi, corporate networks) might have restrictions that block VPN connections.</li>
      </ul>
      <h3>Troubleshooting Steps:</h3>
      <ol>
        <li><strong>Check Your Internet Connection:</strong> Ensure your internet is stable. Try restarting your router and modem.</li>
        <li><strong>Temporarily Disable Firewall/Antivirus:</strong> Test if disabling your system's firewall or other security software resolves the issue. Remember to re-enable them afterwards.</li>
        <li><strong>Try a Different VPN Server:</strong> If McAfee VPN allows, switch to a different server location.</li>
        <li><strong>Update McAfee Software and OS:</strong> Make sure your McAfee VPN client and your operating system are updated to the latest versions.</li>
        <li><strong>Reset Network Settings:</strong> On Windows, you can try "Network Reset" (Settings > Network & Internet > Status > Network reset). On macOS, you can remove and re-add network configurations.</li>
      </ol>
      <p>If you've tried these steps and your McAfee VPN is still disconnecting, don't hesitate to reach out for independent expert assistance. Our team is ready to help you diagnose and fix persistent issues. Call us at <a href="tel:${PHONE_NUMBER_CLEAN}" class="text-blue-600 hover:underline font-bold">${PHONE_NUMBER}</a> for immediate support.</p>
    `,
  },
  {
    slug: `mcafee-safe-connect-not-working-${PHONE_NUMBER_CLEAN}`,
    title: `McAfee Safe Connect Not Working? Expert Help at ${PHONE_NUMBER}`,
    metaDescription: `Solutions for McAfee Safe Connect issues. Get independent support for your VPN problems by calling ${PHONE_NUMBER}.`,
    imageUrl: 'https://picsum.photos/600/400?random=2',
    content: `
      <p>McAfee Safe Connect is designed to protect your online privacy and security, but sometimes it just won't connect or function as expected. When McAfee Safe Connect isn't working, it can be frustrating, especially when you need secure browsing.</p>
      <h3>Common Reasons for Safe Connect Failure:</h3>
      <ul>
        <li><strong>Software Glitches:</strong> Temporary bugs or conflicts within the application itself.</li>
        <li><strong>Internet Connectivity Problems:</strong> A poor or unstable internet connection prevents Safe Connect from establishing a secure tunnel.</li>
        <li><strong>Firewall Interference:</strong> Your device's firewall or another security program might be blocking Safe Connect.</li>
        <li><strong>Subscription Issues:</strong> An expired subscription or issues with your account can prevent the service from starting.</li>
        <li><strong>Corrupted Installation:</strong> The McAfee Safe Connect application might have a corrupted file or an incomplete installation.</li>
      </ul>
      <h3>Troubleshooting Steps:</h3>
      <ol>
        <li><strong>Restart Your Device and Router:</strong> Often, a simple restart can resolve temporary network or software glitches.</li>
        <li><strong>Check Your Internet Connection:</strong> Ensure you have a stable internet connection without Safe Connect active.</li>
        <li><strong>Disable Other VPNs/Proxies:</strong> Make sure no other VPN software or proxy settings are active, as they can conflict.</li>
        <li><strong>Update McAfee Safe Connect:</strong> Check for and install any available updates for McAfee Safe Connect.</li>
        <li><strong>Reinstall Safe Connect:</strong> If all else fails, a clean reinstallation can often resolve deep-seated software issues. Uninstall, restart, then reinstall.</li>
        <li><strong>Verify Subscription:</strong> Log in to your McAfee account to ensure your Safe Connect subscription is active and valid.</li>
      </ol>
      <p>If these steps don't resolve your McAfee Safe Connect issues, our independent support specialists are here to provide tailored assistance. We understand the intricacies of these problems and can help you get back online securely. Call us today at <a href="tel:${PHONE_NUMBER_CLEAN}" class="text-blue-600 hover:underline font-bold">${PHONE_NUMBER}</a> for expert troubleshooting.</p>
    `,
  },
  {
    slug: `mcafee-not-loading-or-connecting-${PHONE_NUMBER_CLEAN}`,
    title: `McAfee Not Loading or Connecting to Internet? Call ${PHONE_NUMBER}`,
    metaDescription: `Solutions for McAfee not loading or connecting to internet issues. Get independent support by calling ${PHONE_NUMBER}.`,
    imageUrl: 'https://picsum.photos/600/400?random=3',
    content: `
      <p>When McAfee isn't loading or connecting to the internet, it leaves your system vulnerable and can disrupt your online activities. This can manifest as the application failing to open, updates not downloading, or real-time protection not functioning.</p>
      <h3>Potential Causes:</h3>
      <ul>
        <li><strong>System Conflicts:</strong> Other security software or system processes might be clashing with McAfee.</li>
        <li><strong>Corrupted Files:</strong> Essential McAfee files could be damaged or missing.</li>
        <li><strong>Network Configuration Issues:</strong> Incorrect proxy settings or DNS problems can prevent McAfee from accessing the internet.</li>
        <li><strong>Malware Interference:</strong> In some rare cases, actual malware can prevent antivirus software from running correctly.</li>
        <li><strong>Resource Contention:</strong> Your system might be low on resources, preventing McAfee from launching or connecting.</li>
      </ul>
      <h3>Solutions:</h3>
      <ol>
        <li><strong>Run McAfee's Repair Tool:</strong> Many McAfee products come with a built-in repair utility that can fix common installation issues.</li>
        <li><strong>Check Internet Connection:</strong> Confirm your device has a working internet connection without McAfee interference.</li>
        <li><strong>Disable Proxy Settings:</strong> If you use a proxy server, try disabling it temporarily.</li>
        <li><strong>Update Network Drivers:</strong> Ensure your network adapter drivers are up to date.</li>
        <li><strong>Perform a Clean Reinstallation:</strong> Use the official McAfee removal tool (MCPR) to completely uninstall McAfee, then restart your computer and reinstall it. This often resolves stubborn issues.</li>
        <li><strong>Scan for Malware in Safe Mode:</strong> If you suspect malware, try booting into Safe Mode with Networking and running a scan with a different, reputable antivirus or anti-malware tool.</li>
      </ol>
      <p>For complex issues or persistent problems with McAfee not loading or connecting, our independent specialists can provide comprehensive diagnostic and repair services. We're dedicated to getting your McAfee protection back on track. Contact us at <a href="tel:${PHONE_NUMBER_CLEAN}" class="text-blue-600 hover:underline font-bold">${PHONE_NUMBER}</a> for reliable assistance.</p>
    `,
  },
];