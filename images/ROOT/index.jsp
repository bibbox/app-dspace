<%
  final String redirectURL = "/server/";
  response.setStatus(response.SC_MOVED_PERMANENTLY);
  response.sendRedirect(redirectURL);
%>
