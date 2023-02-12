(()=>{"use strict";let t=[];class e{constructor(t){this.name=t,this.tasks=[]}createTask(t,e,s,d,n){let c=new a(t,e,s,d,n);return this.tasks.push(c),c}deleteTask(t){this.tasks.splice(t,1)}}class a{constructor(t,e,a,s){this.title=t,this.description=e,this.date=a,this.priority=s,this.complete=!1}editTask(t,e,a,s){this.title=t,this.description=e,this.date=a,this.priority=s}}function s(a){let s=new e(a);t.push(s)}document.querySelector(".content");const d=document.querySelector(".projects-container"),n=document.querySelector(".add-project"),c=document.querySelector(".cancel-project"),o=document.querySelector(".add-task"),l=document.querySelector(".cancel-task"),i=document.querySelector(".edit-task"),r=document.querySelector(".close-task");function p(){d.innerHTML="";for(let e=0;e<t.length;e++){const a=document.createElement("div");d.appendChild(a),a.dataset.p=e,a.classList.add("project");const s=document.createElement("img");s.classList.add("pin"),s.setAttribute("src","./pin.svg"),s.setAttribute("alt","pin");const n=document.createElement("h2");n.dataset.pn=a.dataset.p,n.textContent=`${t[n.dataset.pn].name}`;const c=document.createElement("div");c.classList.add("task-container"),c.dataset.tc=a.dataset.p;const l=document.createElement("button");l.textContent="Add a new task!",l.classList.add("open-task-form-btn"),l.dataset.otf=c.dataset.tc,c.appendChild(l),l.addEventListener("click",(()=>{o.dataset.at=c.dataset.tc,document.querySelector(".task-form-window").style.display="flex"}));for(let a=0;a<t[e].tasks.length;a++){const e=document.createElement("div");e.classList.add("task"),e.dataset.tn=a,e.dataset.pc=l.dataset.otf,c.appendChild(e);const s=document.createElement("input");s.setAttribute("type","checkbox"),s.dataset.cp=e.dataset.pc,s.dataset.c=e.dataset.tn,s.checked=t[s.dataset.cp].tasks[s.dataset.c].complete,s.addEventListener("change",(()=>{!1===t[s.dataset.cp].tasks[s.dataset.c].complete?(t[s.dataset.cp].tasks[s.dataset.c].complete=!0,null!==document.querySelector(`[data-complete="${e.dataset.tn}"][data-completep="${e.dataset.pc}"]`)&&(document.querySelector(`[data-complete="${e.dataset.tn}"][data-completep="${e.dataset.pc}"]`).textContent="Task complete: yes")):(t[s.dataset.cp].tasks[s.dataset.c].complete=!1,null!==document.querySelector(`[data-complete="${e.dataset.tn}"][data-completep="${e.dataset.pc}"]`)&&(document.querySelector(`[data-complete="${e.dataset.tn}"][data-completep="${e.dataset.pc}"]`).textContent="Task complete: no")),console.log(`inside a change-status checkbox ${t[s.dataset.cp].tasks[s.dataset.c].complete}`)}));const d=document.createElement("p");d.classList.add("short-task"),d.dataset.tt=e.dataset.tn,d.dataset.ttp=e.dataset.pc,console.log(d.dataset.tt),d.textContent=`${t[d.dataset.ttp].tasks[d.dataset.tt].title} due ${t[d.dataset.ttp].tasks[d.dataset.tt].date}`;const n=document.createElement("button");n.setAttribute("type","button"),n.textContent="View details",n.dataset.v=e.dataset.tn,n.dataset.vp=e.dataset.pc,n.addEventListener("click",(()=>{if("View details"==n.textContent){n.textContent="Hide details";const a=document.createElement("div");a.classList.add("details"),a.dataset.vd=n.dataset.v,a.dataset.vdp=n.dataset.vp,e.insertBefore(a,p);const s=document.createElement("p");s.textContent=`Title: ${t[n.dataset.vp].tasks[n.dataset.v].title}`;const d=document.createElement("p");d.textContent=`Description: ${t[n.dataset.vp].tasks[n.dataset.v].description}`;const c=document.createElement("p");let o;c.textContent=`Due date: ${t[n.dataset.vp].tasks[n.dataset.v].date}`,o=!1===t[n.dataset.vp].tasks[n.dataset.v].priority?"no":"yes";const l=document.createElement("p");let i;l.textContent=`High priority: ${o}`,i=!1===t[n.dataset.vp].tasks[n.dataset.v].complete?"no":"yes";const r=document.createElement("p");r.setAttribute("id","completeness"),r.dataset.completep=e.dataset.pc,r.dataset.complete=e.dataset.tn,r.textContent=`Task complete: ${i}`,a.append(s,d,c,l,r)}else n.textContent="View details",document.querySelector(`[data-tn="${n.dataset.v}"][data-pc="${n.dataset.vp}"]`).removeChild(document.querySelector(`[data-vd="${n.dataset.v}"][data-vdp="${n.dataset.vp}"]`))}));const o=document.createElement("button");o.setAttribute("type","button"),o.textContent="Edit",o.dataset.e=e.dataset.tn,o.dataset.ep=e.dataset.pc,o.addEventListener("click",(()=>{i.dataset.et=o.dataset.e,i.dataset.etp=o.dataset.ep,document.querySelector(".view-task-window").style.display="flex",document.getElementById("task-title-v").value=t[i.dataset.etp].tasks[i.dataset.et].title,document.getElementById("task-description-v").value=t[i.dataset.etp].tasks[i.dataset.et].description,document.getElementById("task-date-v").value=t[i.dataset.etp].tasks[i.dataset.et].date,document.getElementById("task-priority-v").checked=t[i.dataset.etp].tasks[i.dataset.et].priority})),i.addEventListener("click",(e=>{e.preventDefault(),t[i.dataset.etp].tasks[i.dataset.et].editTask(document.getElementById("task-title-v").value,document.getElementById("task-description-v").value,document.getElementById("task-date-v").value,document.getElementById("task-priority-v").checked),console.log(t),v(),u()}));const r=document.createElement("button");r.setAttribute("type","button"),r.textContent="Delete",r.dataset.d=e.dataset.tn,r.dataset.dp=e.dataset.pc,r.addEventListener("click",(()=>{t[r.dataset.dp].deleteTask(r.dataset.d),console.log(t),u()}));const p=document.createElement("div");p.classList.add("button-container"),p.append(n,o,r),e.append(s,d,p)}const r=document.createElement("button");r.textContent="Delete Project",r.setAttribute("type","button"),r.classList.add("delete-project-btn"),r.dataset.pd=a.dataset.p,r.addEventListener("click",(()=>{var e;e=r.dataset.pd,t.splice(e,1),u(),console.log(t)})),a.append(s,n,c,r)}}function u(){p()}function m(){document.querySelector(".project-form-window").style.display="flex"}function k(){document.querySelector(".project-form-window").style.display="none"}function v(){document.querySelector(".view-task-window").style.display="none"}function y(){document.querySelector(".task-form-window").style.display="none"}s("Personal tasks"),s("Work tasks"),t[0].createTask("Buy a new dress","buy a new dress for Mary's wedding on 20.04.2023","2023-04-10",!0),t[0].createTask("Make a dentist's appointment","Make a dentist's appointment to check out a cavity","2023-02-25",!0),t[1].createTask("Buy a new mug","Buy a new coffee mug to leave at work","2023-03-01",!1),document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".open-project-form").addEventListener("click",m)})),c.addEventListener("click",k),n.addEventListener("click",(e=>{e.preventDefault(),s(document.getElementById("project-name").value),k(),console.log("inside add button",t),p()})),l.addEventListener("click",y),o.addEventListener("click",(e=>{var a;e.preventDefault(),a=o.dataset.at,t[a].createTask(document.getElementById("task-title").value,document.getElementById("task-description").value,document.getElementById("task-date").value,document.getElementById("task-priority").checked),y(),p(),console.log("inside add tasks button",t)})),r.addEventListener("click",v),p(),console.log(t)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVMsR0FBR00sV0FDViwrQkFDQSxxREFDQSxjQUNBLEdBRUZOLEVBQVMsR0FBR00sV0FDVixnQkFDQSx3Q0FDQSxjQUNBLEdBR0ZvQixTQUFTNEIsaUJBQWlCLG9CQUFvQixLQUM1QzVCLFNBQ0dDLGNBQWMsc0JBQ2QyQixpQkFBaUIsUUFBU21ELEVBQWdCLElBRy9DM0UsRUFBY3dCLGlCQUFpQixRQUFTb0QsR0FFeEM3RSxFQUFXeUIsaUJBQWlCLFNBQVVvQyxJQUNwQ0EsRUFBRU0saUJBQ0Z6RSxFQUFpQkcsU0FBU29FLGVBQWUsZ0JBQWdCQyxPQUN6RFcsSUFDQXhDLFFBQVFDLElBQUksb0JBQXFCbkUsR0FDakNtQyxHQUFpQixJQUduQkgsRUFBY3NCLGlCQUFpQixRQUFTcUQsR0FFeEM1RSxFQUFXdUIsaUJBQWlCLFNBQVVvQyxJRHdPdEMsSUFBdUJjLEVDdk9yQmQsRUFBRU0saUJEdU9tQlEsRUN0T1B6RSxFQUFXVyxRQUFRYSxHRHVPakN2RCxFQUFTd0csR0FBY2xHLFdBQ3JCb0IsU0FBU29FLGVBQWUsY0FBY0MsTUFDdENyRSxTQUFTb0UsZUFBZSxvQkFBb0JDLE1BQzVDckUsU0FBU29FLGVBQWUsYUFBYUMsTUFDckNyRSxTQUFTb0UsZUFBZSxpQkFBaUI3QixTQzFPM0MwQyxJQUNBeEUsSUFDQStCLFFBQVFDLElBQUksMEJBQTJCbkUsRUFBUyxJQUdsRGtDLEVBQWlCb0IsaUJBQWlCLFFBQVMyQyxHQUUzQzlELElBRUErQixRQUFRQyxJQUFJbkUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcHJvamVjdHMgPSBbXTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgY29tcGxldGUpIHtcbiAgICBsZXQgdGFzazEgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSk7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2sxKTtcbiAgICByZXR1cm4gdGFzazE7XG4gIH1cblxuICBkZWxldGVUYXNrKHRhc2tJbmRleCkge1xuICAgIHRoaXMudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gIH1cbn1cblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgfVxuXG4gIGVkaXRUYXNrKG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RGF0ZSwgbmV3UHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIHRoaXMuZGF0ZSA9IG5ld0RhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RBcnIocHJvamVjdE5hbWUpIHtcbiAgbGV0IHByb2plY3QyID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3QyKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG59XG5cbmV4cG9ydCB7IHByb2plY3RzLCBQcm9qZWN0LCBUYXNrLCBjcmVhdGVQcm9qZWN0QXJyLCBkZWxldGVQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuL2xvZ2ljXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG5jb25zdCBjYW5jZWxQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtcHJvamVjdFwiKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLXRhc2tcIik7XG5jb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrXCIpO1xuY29uc3QgY2xvc2VFZGl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtdGFza1wiKTtcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgcC5kYXRhc2V0LnAgPSBpO1xuICAgIHAuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cbiAgICBjb25zdCBwaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHBpbi5jbGFzc0xpc3QuYWRkKFwicGluXCIpO1xuICAgIHBpbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Bpbi5zdmdcIik7XG4gICAgcGluLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInBpblwiKTtcblxuICAgIGNvbnN0IHBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHBOYW1lLmRhdGFzZXQucG4gPSBwLmRhdGFzZXQucDtcbiAgICBwTmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW3BOYW1lLmRhdGFzZXQucG5dLm5hbWV9YDtcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuICAgIHRhc2tDb250YWluZXIuZGF0YXNldC50YyA9IHAuZGF0YXNldC5wO1xuXG4gICAgY29uc3Qgb3BlblRhc2tGb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBvcGVuVGFza0Zvcm1CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyB0YXNrIVwiO1xuICAgIG9wZW5UYXNrRm9ybUJ0bi5jbGFzc0xpc3QuYWRkKFwib3Blbi10YXNrLWZvcm0tYnRuXCIpO1xuICAgIG9wZW5UYXNrRm9ybUJ0bi5kYXRhc2V0Lm90ZiA9IHRhc2tDb250YWluZXIuZGF0YXNldC50YztcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wZW5UYXNrRm9ybUJ0bik7XG4gICAgb3BlblRhc2tGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhZGRUYXNrQnRuLmRhdGFzZXQuYXQgPSB0YXNrQ29udGFpbmVyLmRhdGFzZXQudGM7XG4gICAgICBvcGVuVGFza0Zvcm0oKTtcbiAgICB9KTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdHNbaV0udGFza3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgIHRhc2tEaXYuZGF0YXNldC50biA9IGo7XG4gICAgICB0YXNrRGl2LmRhdGFzZXQucGMgPSBvcGVuVGFza0Zvcm1CdG4uZGF0YXNldC5vdGY7XG4gICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG4gICAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBjaGFuZ2VTdGF0dXMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgY2hhbmdlU3RhdHVzLmRhdGFzZXQuY3AgPSB0YXNrRGl2LmRhdGFzZXQucGM7XG4gICAgICBjaGFuZ2VTdGF0dXMuZGF0YXNldC5jID0gdGFza0Rpdi5kYXRhc2V0LnRuO1xuICAgICAgY2hhbmdlU3RhdHVzLmNoZWNrZWQgPVxuICAgICAgICBwcm9qZWN0c1tjaGFuZ2VTdGF0dXMuZGF0YXNldC5jcF0udGFza3NbXG4gICAgICAgICAgY2hhbmdlU3RhdHVzLmRhdGFzZXQuY1xuICAgICAgICBdLmNvbXBsZXRlO1xuICAgICAgY2hhbmdlU3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvamVjdHNbY2hhbmdlU3RhdHVzLmRhdGFzZXQuY3BdLnRhc2tzW2NoYW5nZVN0YXR1cy5kYXRhc2V0LmNdXG4gICAgICAgICAgICAuY29tcGxldGUgPT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIHByb2plY3RzW2NoYW5nZVN0YXR1cy5kYXRhc2V0LmNwXS50YXNrc1tcbiAgICAgICAgICAgIGNoYW5nZVN0YXR1cy5kYXRhc2V0LmNcbiAgICAgICAgICBdLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgW2RhdGEtY29tcGxldGU9XCIke3Rhc2tEaXYuZGF0YXNldC50bn1cIl1bZGF0YS1jb21wbGV0ZXA9XCIke3Rhc2tEaXYuZGF0YXNldC5wY31cIl1gXG4gICAgICAgICAgICApICE9PSBudWxsXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgW2RhdGEtY29tcGxldGU9XCIke3Rhc2tEaXYuZGF0YXNldC50bn1cIl1bZGF0YS1jb21wbGV0ZXA9XCIke3Rhc2tEaXYuZGF0YXNldC5wY31cIl1gXG4gICAgICAgICAgICApLnRleHRDb250ZW50ID0gYFRhc2sgY29tcGxldGU6IHllc2A7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2plY3RzW2NoYW5nZVN0YXR1cy5kYXRhc2V0LmNwXS50YXNrc1tcbiAgICAgICAgICAgIGNoYW5nZVN0YXR1cy5kYXRhc2V0LmNcbiAgICAgICAgICBdLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFtkYXRhLWNvbXBsZXRlPVwiJHt0YXNrRGl2LmRhdGFzZXQudG59XCJdW2RhdGEtY29tcGxldGVwPVwiJHt0YXNrRGl2LmRhdGFzZXQucGN9XCJdYFxuICAgICAgICAgICAgKSAhPT0gbnVsbFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFtkYXRhLWNvbXBsZXRlPVwiJHt0YXNrRGl2LmRhdGFzZXQudG59XCJdW2RhdGEtY29tcGxldGVwPVwiJHt0YXNrRGl2LmRhdGFzZXQucGN9XCJdYFxuICAgICAgICAgICAgKS50ZXh0Q29udGVudCA9IGBUYXNrIGNvbXBsZXRlOiBub2A7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIGBpbnNpZGUgYSBjaGFuZ2Utc3RhdHVzIGNoZWNrYm94ICR7XG4gICAgICAgICAgICBwcm9qZWN0c1tjaGFuZ2VTdGF0dXMuZGF0YXNldC5jcF0udGFza3NbY2hhbmdlU3RhdHVzLmRhdGFzZXQuY11cbiAgICAgICAgICAgICAgLmNvbXBsZXRlXG4gICAgICAgICAgfWBcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBzaG9ydFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHNob3J0VGFzay5jbGFzc0xpc3QuYWRkKFwic2hvcnQtdGFza1wiKTtcbiAgICAgIHNob3J0VGFzay5kYXRhc2V0LnR0ID0gdGFza0Rpdi5kYXRhc2V0LnRuO1xuICAgICAgc2hvcnRUYXNrLmRhdGFzZXQudHRwID0gdGFza0Rpdi5kYXRhc2V0LnBjO1xuICAgICAgY29uc29sZS5sb2coc2hvcnRUYXNrLmRhdGFzZXQudHQpO1xuICAgICAgc2hvcnRUYXNrLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgIHByb2plY3RzW3Nob3J0VGFzay5kYXRhc2V0LnR0cF0udGFza3Nbc2hvcnRUYXNrLmRhdGFzZXQudHRdLnRpdGxlXG4gICAgICB9IGR1ZSAke1xuICAgICAgICBwcm9qZWN0c1tzaG9ydFRhc2suZGF0YXNldC50dHBdLnRhc2tzW3Nob3J0VGFzay5kYXRhc2V0LnR0XS5kYXRlXG4gICAgICB9YDtcblxuICAgICAgY29uc3Qgdmlld0RldGFpbHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgdmlld0RldGFpbHNCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgIHZpZXdEZXRhaWxzQnRuLnRleHRDb250ZW50ID0gXCJWaWV3IGRldGFpbHNcIjtcbiAgICAgIHZpZXdEZXRhaWxzQnRuLmRhdGFzZXQudiA9IHRhc2tEaXYuZGF0YXNldC50bjtcbiAgICAgIHZpZXdEZXRhaWxzQnRuLmRhdGFzZXQudnAgPSB0YXNrRGl2LmRhdGFzZXQucGM7XG5cbiAgICAgIHZpZXdEZXRhaWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmICh2aWV3RGV0YWlsc0J0bi50ZXh0Q29udGVudCA9PSBcIlZpZXcgZGV0YWlsc1wiKSB7XG4gICAgICAgICAgdmlld0RldGFpbHNCdG4udGV4dENvbnRlbnQgPSBcIkhpZGUgZGV0YWlsc1wiO1xuICAgICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG4gICAgICAgICAgZGV0YWlscy5kYXRhc2V0LnZkID0gdmlld0RldGFpbHNCdG4uZGF0YXNldC52O1xuICAgICAgICAgIGRldGFpbHMuZGF0YXNldC52ZHAgPSB2aWV3RGV0YWlsc0J0bi5kYXRhc2V0LnZwO1xuICAgICAgICAgIHRhc2tEaXYuaW5zZXJ0QmVmb3JlKGRldGFpbHMsIGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7XG4gICAgICAgICAgICBwcm9qZWN0c1t2aWV3RGV0YWlsc0J0bi5kYXRhc2V0LnZwXS50YXNrc1t2aWV3RGV0YWlsc0J0bi5kYXRhc2V0LnZdXG4gICAgICAgICAgICAgIC50aXRsZVxuICAgICAgICAgIH1gO1xuXG4gICAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke1xuICAgICAgICAgICAgcHJvamVjdHNbdmlld0RldGFpbHNCdG4uZGF0YXNldC52cF0udGFza3Nbdmlld0RldGFpbHNCdG4uZGF0YXNldC52XVxuICAgICAgICAgICAgICAuZGVzY3JpcHRpb25cbiAgICAgICAgICB9YDtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBgRHVlIGRhdGU6ICR7XG4gICAgICAgICAgICBwcm9qZWN0c1t2aWV3RGV0YWlsc0J0bi5kYXRhc2V0LnZwXS50YXNrc1t2aWV3RGV0YWlsc0J0bi5kYXRhc2V0LnZdXG4gICAgICAgICAgICAgIC5kYXRlXG4gICAgICAgICAgfWA7XG5cbiAgICAgICAgICBsZXQgaW1wb3J0YW50O1xuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcHJvamVjdHNbdmlld0RldGFpbHNCdG4uZGF0YXNldC52cF0udGFza3Nbdmlld0RldGFpbHNCdG4uZGF0YXNldC52XVxuICAgICAgICAgICAgICAucHJpb3JpdHkgPT09IGZhbHNlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpbXBvcnRhbnQgPSBcIm5vXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltcG9ydGFudCA9IFwieWVzXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYEhpZ2ggcHJpb3JpdHk6ICR7aW1wb3J0YW50fWA7XG5cbiAgICAgICAgICBsZXQgY29tcGxldGVuZXNzO1xuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcHJvamVjdHNbdmlld0RldGFpbHNCdG4uZGF0YXNldC52cF0udGFza3Nbdmlld0RldGFpbHNCdG4uZGF0YXNldC52XVxuICAgICAgICAgICAgICAuY29tcGxldGUgPT09IGZhbHNlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb21wbGV0ZW5lc3MgPSBcIm5vXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXBsZXRlbmVzcyA9IFwieWVzXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0NvbXBsZXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29tcGxldGVuZXNzXCIpO1xuICAgICAgICAgIHRhc2tDb21wbGV0ZS5kYXRhc2V0LmNvbXBsZXRlcCA9IHRhc2tEaXYuZGF0YXNldC5wYztcbiAgICAgICAgICB0YXNrQ29tcGxldGUuZGF0YXNldC5jb21wbGV0ZSA9IHRhc2tEaXYuZGF0YXNldC50bjtcbiAgICAgICAgICB0YXNrQ29tcGxldGUudGV4dENvbnRlbnQgPSBgVGFzayBjb21wbGV0ZTogJHtjb21wbGV0ZW5lc3N9YDtcblxuICAgICAgICAgIGRldGFpbHMuYXBwZW5kKFxuICAgICAgICAgICAgdGFza1RpdGxlLFxuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFza0RhdGUsXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHksXG4gICAgICAgICAgICB0YXNrQ29tcGxldGVcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZpZXdEZXRhaWxzQnRuLnRleHRDb250ZW50ID0gXCJWaWV3IGRldGFpbHNcIjtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBbZGF0YS10bj1cIiR7dmlld0RldGFpbHNCdG4uZGF0YXNldC52fVwiXVtkYXRhLXBjPVwiJHt2aWV3RGV0YWlsc0J0bi5kYXRhc2V0LnZwfVwiXWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtdmQ9XCIke3ZpZXdEZXRhaWxzQnRuLmRhdGFzZXQudn1cIl1bZGF0YS12ZHA9XCIke3ZpZXdEZXRhaWxzQnRuLmRhdGFzZXQudnB9XCJdYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb3BlbkVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgb3BlbkVkaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgIG9wZW5FZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgICBvcGVuRWRpdEJ0bi5kYXRhc2V0LmUgPSB0YXNrRGl2LmRhdGFzZXQudG47XG4gICAgICBvcGVuRWRpdEJ0bi5kYXRhc2V0LmVwID0gdGFza0Rpdi5kYXRhc2V0LnBjO1xuICAgICAgb3BlbkVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZWRpdFRhc2tCdG4uZGF0YXNldC5ldCA9IG9wZW5FZGl0QnRuLmRhdGFzZXQuZTtcbiAgICAgICAgZWRpdFRhc2tCdG4uZGF0YXNldC5ldHAgPSBvcGVuRWRpdEJ0bi5kYXRhc2V0LmVwO1xuICAgICAgICBvcGVuRWRpdFRhc2tGb3JtKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZS12XCIpLnZhbHVlID1cbiAgICAgICAgICBwcm9qZWN0c1tlZGl0VGFza0J0bi5kYXRhc2V0LmV0cF0udGFza3NbZWRpdFRhc2tCdG4uZGF0YXNldC5ldF0udGl0bGU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvbi12XCIpLnZhbHVlID1cbiAgICAgICAgICBwcm9qZWN0c1tlZGl0VGFza0J0bi5kYXRhc2V0LmV0cF0udGFza3NbXG4gICAgICAgICAgICBlZGl0VGFza0J0bi5kYXRhc2V0LmV0XG4gICAgICAgICAgXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGUtdlwiKS52YWx1ZSA9XG4gICAgICAgICAgcHJvamVjdHNbZWRpdFRhc2tCdG4uZGF0YXNldC5ldHBdLnRhc2tzW2VkaXRUYXNrQnRuLmRhdGFzZXQuZXRdLmRhdGU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eS12XCIpLmNoZWNrZWQgPVxuICAgICAgICAgIHByb2plY3RzW2VkaXRUYXNrQnRuLmRhdGFzZXQuZXRwXS50YXNrc1tcbiAgICAgICAgICAgIGVkaXRUYXNrQnRuLmRhdGFzZXQuZXRcbiAgICAgICAgICBdLnByaW9yaXR5O1xuICAgICAgICAvLyBlZGl0VGFza0J0bi5kYXRhc2V0LmVkaXRUYXNrQnRuID0gajtcbiAgICAgIH0pO1xuXG4gICAgICBlZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9qZWN0c1tlZGl0VGFza0J0bi5kYXRhc2V0LmV0cF0udGFza3NbXG4gICAgICAgICAgZWRpdFRhc2tCdG4uZGF0YXNldC5ldFxuICAgICAgICBdLmVkaXRUYXNrKFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZS12XCIpLnZhbHVlLFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvbi12XCIpLnZhbHVlLFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kYXRlLXZcIikudmFsdWUsXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LXZcIikuY2hlY2tlZFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcblxuICAgICAgICBjbG9zZUVkaXRUYXNrRm9ybSgpO1xuICAgICAgICByZW5ld0Rpc3BsYXkoKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGRlbGV0ZVRhc2tCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgIGRlbGV0ZVRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgZGVsZXRlVGFza0J0bi5kYXRhc2V0LmQgPSB0YXNrRGl2LmRhdGFzZXQudG47XG4gICAgICBkZWxldGVUYXNrQnRuLmRhdGFzZXQuZHAgPSB0YXNrRGl2LmRhdGFzZXQucGM7XG4gICAgICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RzW2RlbGV0ZVRhc2tCdG4uZGF0YXNldC5kcF0uZGVsZXRlVGFzayhkZWxldGVUYXNrQnRuLmRhdGFzZXQuZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICAgICAgcmVuZXdEaXNwbGF5KCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQodmlld0RldGFpbHNCdG4sIG9wZW5FZGl0QnRuLCBkZWxldGVUYXNrQnRuKTtcblxuICAgICAgdGFza0Rpdi5hcHBlbmQoY2hhbmdlU3RhdHVzLCBzaG9ydFRhc2ssIGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFByb2plY3RcIjtcbiAgICBkZWxldGVQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uZGF0YXNldC5wZCA9IHAuZGF0YXNldC5wO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRlbGV0ZVByb2plY3QoZGVsZXRlUHJvamVjdEJ0bi5kYXRhc2V0LnBkKTtcbiAgICAgIHJlbmV3RGlzcGxheSgpO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgIH0pO1xuXG4gICAgcC5hcHBlbmQocGluLCBwTmFtZSwgdGFza0NvbnRhaW5lciwgZGVsZXRlUHJvamVjdEJ0bik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZXdEaXNwbGF5KCkge1xuICBkaXNwbGF5UHJvamVjdHMoKTtcbn1cblxuZnVuY3Rpb24gb3BlblByb2plY3RGb3JtKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybS13aW5kb3dcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybS13aW5kb3dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBvcGVuRWRpdFRhc2tGb3JtKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZXctdGFzay13aW5kb3dcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufVxuXG5mdW5jdGlvbiBjbG9zZUVkaXRUYXNrRm9ybSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWV3LXRhc2std2luZG93XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gb3BlblRhc2tGb3JtKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybS13aW5kb3dcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxUYXNrKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybS13aW5kb3dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRE9NKHByb2plY3RJbmRleCkge1xuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLmNyZWF0ZVRhc2soXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGF0ZVwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHlcIikuY2hlY2tlZFxuICApO1xufVxuXG5leHBvcnQge1xuICBjb250ZW50LFxuICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgYWRkUHJvamVjdCxcbiAgY2FuY2VsUHJvamVjdCxcbiAgYWRkVGFza0J0bixcbiAgY2FuY2VsVGFza0J0bixcbiAgZWRpdFRhc2tCdG4sXG4gIGNsb3NlRWRpdFRhc2tCdG4sXG4gIG9wZW5Qcm9qZWN0Rm9ybSxcbiAgY2xvc2VQcm9qZWN0Rm9ybSxcbiAgb3BlblRhc2tGb3JtLFxuICBjYW5jZWxUYXNrLFxuICBjcmVhdGVUYXNrRE9NLFxuICBkaXNwbGF5UHJvamVjdHMsXG4gIHJlbmV3RGlzcGxheSxcbiAgb3BlbkVkaXRUYXNrRm9ybSxcbiAgY2xvc2VFZGl0VGFza0Zvcm0sXG59O1xuIiwiaW1wb3J0IHsgcHJvamVjdHMsIGNyZWF0ZVByb2plY3RBcnIgfSBmcm9tIFwiLi9sb2dpY1wiO1xuXG5pbXBvcnQge1xuICBjb250ZW50LFxuICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgYWRkUHJvamVjdCxcbiAgY2FuY2VsUHJvamVjdCxcbiAgYWRkVGFza0J0bixcbiAgY2FuY2VsVGFza0J0bixcbiAgZWRpdFRhc2tCdG4sXG4gIGNsb3NlRWRpdFRhc2tCdG4sXG4gIG9wZW5Qcm9qZWN0Rm9ybSxcbiAgY2xvc2VQcm9qZWN0Rm9ybSxcbiAgb3BlblRhc2tGb3JtLFxuICBjYW5jZWxUYXNrLFxuICBjcmVhdGVUYXNrRE9NLFxuICBkaXNwbGF5UHJvamVjdHMsXG4gIHJlbmV3RGlzcGxheSxcbiAgb3BlbkVkaXRUYXNrRm9ybSxcbiAgY2xvc2VFZGl0VGFza0Zvcm0sXG59IGZyb20gXCIuL2RvbVwiO1xuXG5jcmVhdGVQcm9qZWN0QXJyKFwiUGVyc29uYWwgdGFza3NcIik7XG5jcmVhdGVQcm9qZWN0QXJyKFwiV29yayB0YXNrc1wiKTtcblxucHJvamVjdHNbMF0uY3JlYXRlVGFzayhcbiAgXCJCdXkgYSBuZXcgZHJlc3NcIixcbiAgXCJidXkgYSBuZXcgZHJlc3MgZm9yIE1hcnkncyB3ZWRkaW5nIG9uIDIwLjA0LjIwMjNcIixcbiAgXCIyMDIzLTA0LTEwXCIsXG4gIHRydWVcbik7XG5wcm9qZWN0c1swXS5jcmVhdGVUYXNrKFxuICBcIk1ha2UgYSBkZW50aXN0J3MgYXBwb2ludG1lbnRcIixcbiAgXCJNYWtlIGEgZGVudGlzdCdzIGFwcG9pbnRtZW50IHRvIGNoZWNrIG91dCBhIGNhdml0eVwiLFxuICBcIjIwMjMtMDItMjVcIixcbiAgdHJ1ZVxuKTtcbnByb2plY3RzWzFdLmNyZWF0ZVRhc2soXG4gIFwiQnV5IGEgbmV3IG11Z1wiLFxuICBcIkJ1eSBhIG5ldyBjb2ZmZWUgbXVnIHRvIGxlYXZlIGF0IHdvcmtcIixcbiAgXCIyMDIzLTAzLTAxXCIsXG4gIGZhbHNlXG4pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIub3Blbi1wcm9qZWN0LWZvcm1cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Qcm9qZWN0Rm9ybSk7XG59KTtcblxuY2FuY2VsUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQcm9qZWN0Rm9ybSk7XG5cbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY3JlYXRlUHJvamVjdEFycihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZSk7XG4gIGNsb3NlUHJvamVjdEZvcm0oKTtcbiAgY29uc29sZS5sb2coXCJpbnNpZGUgYWRkIGJ1dHRvblwiLCBwcm9qZWN0cyk7XG4gIGRpc3BsYXlQcm9qZWN0cygpO1xufSk7XG5cbmNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbFRhc2spO1xuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNyZWF0ZVRhc2tET00oYWRkVGFza0J0bi5kYXRhc2V0LmF0KTtcbiAgY2FuY2VsVGFzaygpO1xuICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgY29uc29sZS5sb2coXCJpbnNpZGUgYWRkIHRhc2tzIGJ1dHRvblwiLCBwcm9qZWN0cyk7XG59KTtcblxuY2xvc2VFZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VFZGl0VGFza0Zvcm0pO1xuXG5kaXNwbGF5UHJvamVjdHMoKTtcblxuY29uc29sZS5sb2cocHJvamVjdHMpO1xuIl0sIm5hbWVzIjpbInByb2plY3RzIiwiUHJvamVjdCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRoaXMiLCJ0YXNrcyIsImNyZWF0ZVRhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsInByaW9yaXR5IiwiY29tcGxldGUiLCJ0YXNrMSIsIlRhc2siLCJwdXNoIiwiZGVsZXRlVGFzayIsInRhc2tJbmRleCIsInNwbGljZSIsImVkaXRUYXNrIiwibmV3VGl0bGUiLCJuZXdEZXNjcmlwdGlvbiIsIm5ld0RhdGUiLCJuZXdQcmlvcml0eSIsImNyZWF0ZVByb2plY3RBcnIiLCJwcm9qZWN0TmFtZSIsInByb2plY3QyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvamVjdHNDb250YWluZXIiLCJhZGRQcm9qZWN0IiwiY2FuY2VsUHJvamVjdCIsImFkZFRhc2tCdG4iLCJjYW5jZWxUYXNrQnRuIiwiZWRpdFRhc2tCdG4iLCJjbG9zZUVkaXRUYXNrQnRuIiwiZGlzcGxheVByb2plY3RzIiwiaW5uZXJIVE1MIiwiaSIsImxlbmd0aCIsInAiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJkYXRhc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicGluIiwic2V0QXR0cmlidXRlIiwicE5hbWUiLCJwbiIsInRleHRDb250ZW50IiwidGFza0NvbnRhaW5lciIsInRjIiwib3BlblRhc2tGb3JtQnRuIiwib3RmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0Iiwic3R5bGUiLCJkaXNwbGF5IiwiaiIsInRhc2tEaXYiLCJ0biIsInBjIiwiY2hhbmdlU3RhdHVzIiwiY3AiLCJjIiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJzaG9ydFRhc2siLCJ0dCIsInR0cCIsInZpZXdEZXRhaWxzQnRuIiwidiIsInZwIiwiZGV0YWlscyIsInZkIiwidmRwIiwiaW5zZXJ0QmVmb3JlIiwiYnV0dG9uQ29udGFpbmVyIiwidGFza1RpdGxlIiwidGFza0Rlc2NyaXB0aW9uIiwidGFza0RhdGUiLCJpbXBvcnRhbnQiLCJ0YXNrUHJpb3JpdHkiLCJjb21wbGV0ZW5lc3MiLCJ0YXNrQ29tcGxldGUiLCJjb21wbGV0ZXAiLCJhcHBlbmQiLCJyZW1vdmVDaGlsZCIsIm9wZW5FZGl0QnRuIiwiZSIsImVwIiwiZXQiLCJldHAiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJjbG9zZUVkaXRUYXNrRm9ybSIsInJlbmV3RGlzcGxheSIsImRlbGV0ZVRhc2tCdG4iLCJkIiwiZHAiLCJkZWxldGVQcm9qZWN0QnRuIiwicGQiLCJwcm9qZWN0SW5kZXgiLCJvcGVuUHJvamVjdEZvcm0iLCJjbG9zZVByb2plY3RGb3JtIiwiY2FuY2VsVGFzayJdLCJzb3VyY2VSb290IjoiIn0=