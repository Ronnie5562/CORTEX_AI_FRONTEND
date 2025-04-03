export function openSidebar() {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.setProperty('--SideNavigation-slideIn', '1');
  }
}

export function closeSidebar() {
  if (typeof window !== 'undefined') {
    document.documentElement.style.removeProperty('--SideNavigation-slideIn');
    document.body.style.removeProperty('overflow');
  }
}

export function toggleSidebar() {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const slideIn = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--SideNavigation-slideIn');
    if (slideIn) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
}

export function openSettingsPane() {
  if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.setProperty('--SettingsPane-slideIn', '1');
  }
}

export function closeSettingsPane() {
  if (typeof window !== 'undefined') {
      document.documentElement.style.removeProperty('--SettingsPane-slideIn');
      document.body.style.removeProperty('overflow');
  }
}

export function toggleSettingsPane() {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const slideIn = window
          .getComputedStyle(document.documentElement)
          .getPropertyValue('--SettingsPane-slideIn');
      if (slideIn) {
          closeSettingsPane();
      } else {
          openSettingsPane();
      }
  }
}