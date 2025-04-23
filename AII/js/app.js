// 通用应用功能

// 设置变量
const root = document.documentElement;

// 设置CSS变量
root.style.setProperty('--primary', '#4F46E5');
root.style.setProperty('--primary-light', '#E0EAFF');
root.style.setProperty('--success', '#10B981');
root.style.setProperty('--warning', '#F59E0B');
root.style.setProperty('--danger', '#EF4444');
root.style.setProperty('--text', '#1F2937');
root.style.setProperty('--text-light', '#6B7280');
root.style.setProperty('--dark', '#111827');
root.style.setProperty('--gray-50', '#F9FAFB');
root.style.setProperty('--gray-100', '#F3F4F6');
root.style.setProperty('--gray-200', '#E5E7EB');
root.style.setProperty('--gray-300', '#D1D5DB');
root.style.setProperty('--gray-400', '#9CA3AF');
root.style.setProperty('--border-radius', '6px');
root.style.setProperty('--shadow-sm', '0 1px 2px 0 rgba(0, 0, 0, 0.05)');
root.style.setProperty('--shadow-md', '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)');
root.style.setProperty('--shadow-lg', '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)');

// 为后台自动添加当前年份
document.addEventListener('DOMContentLoaded', function() {
  const yearElements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  
  yearElements.forEach(function(el) {
    el.textContent = currentYear;
  });
});

// 防止表单提交后刷新页面
document.addEventListener('submit', function(e) {
  const isForm = e.target.tagName === 'FORM';
  const isPreventDefault = e.target.getAttribute('data-prevent-default') === 'true';
  
  if (isForm && isPreventDefault) {
    e.preventDefault();
    console.log('表单提交已阻止');
  }
});

// 后台菜单项高亮
document.addEventListener('DOMContentLoaded', function() {
  const pathname = window.location.pathname;
  const menuItems = document.querySelectorAll('.sidebar-menu-item');
  
  menuItems.forEach(function(item) {
    const href = item.getAttribute('href');
    if (href && pathname.endsWith(href)) {
      item.classList.add('active');
    }
  });
}); 