(()=>{"use strict";let e=[];class t{constructor(e){this.name=e,this.tasks=[]}createTask(e,t,o,c,d){let a=new n(e,t,o,c,d);return this.tasks.push(a),a}deleteTask(e){this.tasks.splice(e,1)}}class n{constructor(e,t,n,o,c){this.title=e,this.description=t,this.date=n,this.priority=o,this.complete=c}set newTitle(e){this.title=e}set newDescription(e){this.description=e}set newDate(e){this.date=e}set newPriority(e){this.priority=e}set newComplete(e){this.complete=e}}document.querySelector(".content");const o=document.querySelector(".projects-container"),c=document.querySelector(".add-project"),d=document.querySelector(".cancel-project"),a=document.querySelector(".add-task"),s=document.querySelector(".cancel-task");function l(){document.querySelector(".project-form-window").style.display="flex"}function r(){document.querySelector(".project-form-window").style.display="none"}function u(){document.querySelector(".task-form-window").style.display="none"}document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".open-project-form").addEventListener("click",l)})),d.addEventListener("click",r),c.addEventListener("click",(n=>{n.preventDefault(),function(n){let o=new t(n);e.push(o)}(document.getElementById("project-name").value),function(){const t=document.createElement("div");t.classList.add("project");const n=document.createElement("p");n.textContent=document.getElementById("project-name").value;const c=document.createElement("div");c.textContent="I am a task Container",e.forEach((t=>{c.dataset.number=e.indexOf(t)}));const d=document.createElement("button");d.textContent="Add a new task!",d.classList.add("open-task-form-btn"),c.appendChild(d),e.forEach((t=>{d.dataset.numberP=e.indexOf(t)})),d.addEventListener("click",(()=>{document.querySelector(".task-form-window").style.display="flex",a.dataset.numberProject=d.dataset.numberP}));const s=document.createElement("button");s.textContent="Delete Project",s.setAttribute("type","button"),e.forEach((t=>{s.dataset.numberBtn=e.indexOf(t)})),s.addEventListener("click",(()=>{var n;n=s.dataset.numberBtn,e.splice(n,1),o.removeChild(t),console.log(e)})),t.append(n,c,s),o.appendChild(t),console.log("dom"),document.getElementById("project-name").value=""}(),r(),console.log("inside add button",e)})),s.addEventListener("click",u),a.addEventListener("click",(t=>{var n;t.preventDefault(),n=a.dataset.numberProject,e[n].createTask(document.getElementById("task-title").value,document.getElementById("task-description").value,document.getElementById("task-date").value,document.getElementById("task-priority").value,document.getElementById("task-complete").checked),function(e){const t=document.createElement("div");document.querySelector(`[data-number="${e}"]`).appendChild(t);const n=document.createElement("p");n.textContent=`${document.getElementById("task-title").value} due ${document.getElementById("task-date").value}`;const o=document.createElement("p");o.textContent=`Title: ${document.getElementById("task-title").value}`;const c=document.createElement("p");c.textContent=`Description: ${document.getElementById("task-description").value}`;const d=document.createElement("p");d.textContent=`Due Date: ${document.getElementById("task-date").value}`;const a=document.createElement("p");let s;a.textContent=`Priority: ${document.getElementById("task-priority").value}`,s=!1===document.getElementById("task-complete").value?"no":"yes";const l=document.createElement("p");l.textContent=`Task complete: ${s}`,t.append(n,o,c,d,a,l)}(a.dataset.numberProject),u(),console.log("inside add tasks button",e)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVNxQixjQUFjLEtBQy9DMkIsRUFBZ0J4QixZQUFjLGdCQUM1QnhCLFNBQVNrQixlQUFlLG9CQUFvQkMsUUFHOUMsTUFBTThCLEVBQVdqRCxTQUFTcUIsY0FBYyxLQUN4QzRCLEVBQVN6QixZQUFjLGFBQ3JCeEIsU0FBU2tCLGVBQWUsYUFBYUMsUUFHdkMsTUFBTStCLEVBQWVsRCxTQUFTcUIsY0FBYyxLQUs1QyxJQUFJOEIsRUFKSkQsRUFBYTFCLFlBQWMsYUFDekJ4QixTQUFTa0IsZUFBZSxpQkFBaUJDLFFBTXpDZ0MsR0FEcUQsSUFBbkRuRCxTQUFTa0IsZUFBZSxpQkFBaUJDLE1BQzVCLEtBRUEsTUFHakIsTUFBTWlDLEVBQWVwRCxTQUFTcUIsY0FBYyxLQUM1QytCLEVBQWE1QixZQUFjLGtCQUFrQjJCLElBRTdDTixFQUFRSCxPQUNOSSxFQUNBQyxFQUNBQyxFQUNBQyxFQUNBQyxFQUNBRSxFQUVKLENDbkZFQyxDQUFtQmhELEVBQVd1QixRQUFRTSxlQUN0Q3ZCLElBQ0E2QixRQUFRQyxJQUFJLDBCQUEyQmhFLEVBQVMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcHJvamVjdHMgPSBbXTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgY29tcGxldGUpIHtcbiAgICBsZXQgdGFzazEgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSk7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2sxKTtcbiAgICByZXR1cm4gdGFzazE7XG4gIH1cblxuICBkZWxldGVUYXNrKHRhc2tJbmRleCkge1xuICAgIHRoaXMudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gIH1cbn1cblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gIH1cblxuICBzZXQgbmV3VGl0bGUobmV3VGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gIH1cblxuICBzZXQgbmV3RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgbmV3RGF0ZShuZXdEYXRlKSB7XG4gICAgdGhpcy5kYXRlID0gbmV3RGF0ZTtcbiAgfVxuXG4gIHNldCBuZXdQcmlvcml0eShuZXdQcmlvcml0eSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgfVxuXG4gIHNldCBuZXdDb21wbGV0ZShuZXdDb21wbGV0ZSkge1xuICAgIHRoaXMuY29tcGxldGUgPSBuZXdDb21wbGV0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QXJyKHByb2plY3ROYW1lKSB7XG4gIGxldCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0Mik7XG59XG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJbmRleCkge1xuICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soXG4gIG5ld1RpdGxlLFxuICBuZXdEZXNjcmlwdGlvbixcbiAgbmV3RGF0ZSxcbiAgbmV3UHJpb3JpdHksXG4gIG5ld0NvbXBsZXRlLFxuICBwcm9qZWN0SW5kZXgsXG4gIHRhc2tJbmRleFxuKSB7XG4gIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5uZXdUaXRsZSA9IG5ld1RpdGxlO1xuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0ubmV3RGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLm5ld0RhdGUgPSBuZXdEYXRlO1xuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0ubmV3UHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLm5ld0NvbXBsZXRlID0gbmV3Q29tcGxldGU7XG59XG5cbmV4cG9ydCB7IHByb2plY3RzLCBQcm9qZWN0LCBUYXNrLCBjcmVhdGVQcm9qZWN0QXJyLCBkZWxldGVQcm9qZWN0LCBlZGl0VGFzayB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdHMsIGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9sb2dpY1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKTtcbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuY29uc3QgY2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLXByb2plY3RcIik7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbmNvbnN0IGNhbmNlbFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC10YXNrXCIpO1xuXG5mdW5jdGlvbiBvcGVuUHJvamVjdEZvcm0oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtLXdpbmRvd1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtLXdpbmRvd1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWU7XG5cbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkkgYW0gYSB0YXNrIENvbnRhaW5lclwiO1xuICBwcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgdGFza0NvbnRhaW5lci5kYXRhc2V0Lm51bWJlciA9IHByb2plY3RzLmluZGV4T2YoaXRlbSk7XG4gIH0pO1xuXG4gIGNvbnN0IG9wZW5UYXNrRm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG9wZW5UYXNrRm9ybUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IHRhc2shXCI7XG4gIG9wZW5UYXNrRm9ybUJ0bi5jbGFzc0xpc3QuYWRkKFwib3Blbi10YXNrLWZvcm0tYnRuXCIpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wZW5UYXNrRm9ybUJ0bik7XG4gIHByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBvcGVuVGFza0Zvcm1CdG4uZGF0YXNldC5udW1iZXJQID0gcHJvamVjdHMuaW5kZXhPZihpdGVtKTtcbiAgfSk7XG4gIG9wZW5UYXNrRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9wZW5UYXNrRm9ybSgpO1xuICAgIGFkZFRhc2tCdG4uZGF0YXNldC5udW1iZXJQcm9qZWN0ID0gb3BlblRhc2tGb3JtQnRuLmRhdGFzZXQubnVtYmVyUDtcbiAgfSk7XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBQcm9qZWN0XCI7XG4gIGRlbGV0ZVByb2plY3RCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGRlbGV0ZVByb2plY3RCdG4uZGF0YXNldC5udW1iZXJCdG4gPSBwcm9qZWN0cy5pbmRleE9mKGl0ZW0pO1xuICB9KTtcbiAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZVByb2plY3QoZGVsZXRlUHJvamVjdEJ0bi5kYXRhc2V0Lm51bWJlckJ0bik7XG4gICAgcHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICB9KTtcblxuICBwcm9qZWN0LmFwcGVuZChwcm9qZWN0TmFtZSwgdGFza0NvbnRhaW5lciwgZGVsZXRlUHJvamVjdEJ0bik7XG4gIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICBjb25zb2xlLmxvZyhcImRvbVwiKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIG9wZW5UYXNrRm9ybSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm0td2luZG93XCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn1cblxuZnVuY3Rpb24gY2FuY2VsVGFzaygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm0td2luZG93XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0RPTShwcm9qZWN0SW5kZXgpIHtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS5jcmVhdGVUYXNrKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZVwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIikudmFsdWUsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGVcIikudmFsdWUsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5XCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1jb21wbGV0ZVwiKS5jaGVja2VkXG4gICk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0NvbnRhaW5lcihwcm9qZWN0SW5kZXgpIHtcbiAgY29uc3QgdGFza0RPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtbnVtYmVyPVwiJHtwcm9qZWN0SW5kZXh9XCJdYClcbiAgICAuYXBwZW5kQ2hpbGQodGFza0RPTSk7XG5cbiAgY29uc3Qgc2hvcnRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHNob3J0VGFzay50ZXh0Q29udGVudCA9IGAke2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZVwiKS52YWx1ZX0gZHVlICR7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGVcIikudmFsdWVcbiAgfWA7XG5cbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGBUaXRsZTogJHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGVcIikudmFsdWVcbiAgfWA7XG5cbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIikudmFsdWVcbiAgfWA7XG5cbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGVcIikudmFsdWVcbiAgfWA7XG5cbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHlcIikudmFsdWVcbiAgfWA7XG5cbiAgbGV0IGNvbXBsZXRlbmVzcztcblxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWNvbXBsZXRlXCIpLnZhbHVlID09PSBmYWxzZSkge1xuICAgIGNvbXBsZXRlbmVzcyA9IFwibm9cIjtcbiAgfSBlbHNlIHtcbiAgICBjb21wbGV0ZW5lc3MgPSBcInllc1wiO1xuICB9XG5cbiAgY29uc3QgdGFza0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tDb21wbGV0ZS50ZXh0Q29udGVudCA9IGBUYXNrIGNvbXBsZXRlOiAke2NvbXBsZXRlbmVzc31gO1xuXG4gIHRhc2tET00uYXBwZW5kKFxuICAgIHNob3J0VGFzayxcbiAgICB0YXNrVGl0bGUsXG4gICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgIHRhc2tEYXRlLFxuICAgIHRhc2tQcmlvcml0eSxcbiAgICB0YXNrQ29tcGxldGVcbiAgKTtcbn1cblxuZXhwb3J0IHtcbiAgY29udGVudCxcbiAgcHJvamVjdHNDb250YWluZXIsXG4gIGFkZFByb2plY3QsXG4gIGNhbmNlbFByb2plY3QsXG4gIGFkZFRhc2tCdG4sXG4gIGNhbmNlbFRhc2tCdG4sXG4gIG9wZW5Qcm9qZWN0Rm9ybSxcbiAgY2xvc2VQcm9qZWN0Rm9ybSxcbiAgY3JlYXRlUHJvamVjdCxcbiAgb3BlblRhc2tGb3JtLFxuICBjYW5jZWxUYXNrLFxuICBjcmVhdGVUYXNrRE9NLFxuICBhZGRUYXNrVG9Db250YWluZXIsXG59O1xuIiwiaW1wb3J0IHtcbiAgcHJvamVjdHMsXG4gIFByb2plY3QsXG4gIFRhc2ssXG4gIGNyZWF0ZVByb2plY3RBcnIsXG4gIGRlbGV0ZVByb2plY3QsXG4gIGVkaXRUYXNrLFxufSBmcm9tIFwiLi9sb2dpY1wiO1xuXG5pbXBvcnQge1xuICBjb250ZW50LFxuICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgYWRkUHJvamVjdCxcbiAgY2FuY2VsUHJvamVjdCxcbiAgYWRkVGFza0J0bixcbiAgY2FuY2VsVGFza0J0bixcbiAgb3BlblByb2plY3RGb3JtLFxuICBjbG9zZVByb2plY3RGb3JtLFxuICBjcmVhdGVQcm9qZWN0LFxuICBvcGVuVGFza0Zvcm0sXG4gIGNhbmNlbFRhc2ssXG4gIGNyZWF0ZVRhc2ssXG4gIGNyZWF0ZVRhc2tET00sXG4gIGFkZFRhc2tUb0NvbnRhaW5lcixcbn0gZnJvbSBcIi4vZG9tXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5vcGVuLXByb2plY3QtZm9ybVwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblByb2plY3RGb3JtKTtcbn0pO1xuXG5jYW5jZWxQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVByb2plY3RGb3JtKTtcblxuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjcmVhdGVQcm9qZWN0QXJyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlKTtcbiAgY3JlYXRlUHJvamVjdCgpO1xuICBjbG9zZVByb2plY3RGb3JtKCk7XG4gIGNvbnNvbGUubG9nKFwiaW5zaWRlIGFkZCBidXR0b25cIiwgcHJvamVjdHMpO1xufSk7XG5cbmNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbFRhc2spO1xuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNyZWF0ZVRhc2tET00oYWRkVGFza0J0bi5kYXRhc2V0Lm51bWJlclByb2plY3QpO1xuICBhZGRUYXNrVG9Db250YWluZXIoYWRkVGFza0J0bi5kYXRhc2V0Lm51bWJlclByb2plY3QpO1xuICBjYW5jZWxUYXNrKCk7XG4gIGNvbnNvbGUubG9nKFwiaW5zaWRlIGFkZCB0YXNrcyBidXR0b25cIiwgcHJvamVjdHMpO1xufSk7XG4iXSwibmFtZXMiOlsicHJvamVjdHMiLCJQcm9qZWN0IiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGhpcyIsInRhc2tzIiwiY3JlYXRlVGFzayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwicHJpb3JpdHkiLCJjb21wbGV0ZSIsInRhc2sxIiwiVGFzayIsInB1c2giLCJkZWxldGVUYXNrIiwidGFza0luZGV4Iiwic3BsaWNlIiwibmV3VGl0bGUiLCJuZXdEZXNjcmlwdGlvbiIsIm5ld0RhdGUiLCJuZXdQcmlvcml0eSIsIm5ld0NvbXBsZXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvamVjdHNDb250YWluZXIiLCJhZGRQcm9qZWN0IiwiY2FuY2VsUHJvamVjdCIsImFkZFRhc2tCdG4iLCJjYW5jZWxUYXNrQnRuIiwib3BlblByb2plY3RGb3JtIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xvc2VQcm9qZWN0Rm9ybSIsImNhbmNlbFRhc2siLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvamVjdE5hbWUiLCJwcm9qZWN0MiIsImNyZWF0ZVByb2plY3RBcnIiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwicHJvamVjdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsInRhc2tDb250YWluZXIiLCJmb3JFYWNoIiwiaXRlbSIsImRhdGFzZXQiLCJudW1iZXIiLCJpbmRleE9mIiwib3BlblRhc2tGb3JtQnRuIiwiYXBwZW5kQ2hpbGQiLCJudW1iZXJQIiwibnVtYmVyUHJvamVjdCIsImRlbGV0ZVByb2plY3RCdG4iLCJzZXRBdHRyaWJ1dGUiLCJudW1iZXJCdG4iLCJwcm9qZWN0SW5kZXgiLCJyZW1vdmVDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmQiLCJjcmVhdGVQcm9qZWN0IiwiY2hlY2tlZCIsInRhc2tET00iLCJzaG9ydFRhc2siLCJ0YXNrVGl0bGUiLCJ0YXNrRGVzY3JpcHRpb24iLCJ0YXNrRGF0ZSIsInRhc2tQcmlvcml0eSIsImNvbXBsZXRlbmVzcyIsInRhc2tDb21wbGV0ZSIsImFkZFRhc2tUb0NvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=