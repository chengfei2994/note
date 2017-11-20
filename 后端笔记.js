springboot在线生成脚手架：https://start.spring.io/

//springboot跨域过滤器,不需要其他配置
/**
 * 跨域过滤器
 * @author DELL
 *
 */
@Component  
public class CorsFilter implements Filter{

	final static org.slf4j.Logger logger = org.slf4j.LoggerFactory.getLogger(CorsFilter.class);  

	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {  
        HttpServletResponse response = (HttpServletResponse) res;  
        response.setHeader("Access-Control-Allow-Origin", "*");  
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");  
        response.setHeader("Access-Control-Max-Age", "3600");  
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with");  
        chain.doFilter(req, res);  
    }  
    public void init(FilterConfig filterConfig) {}  
    public void destroy() {}  
}



