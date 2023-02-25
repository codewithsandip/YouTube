
# Improve Front End Performance

* Use Lighthouse to measure performance
* Optimize your images, videos etc
* Remove unwanted dependencies like take example if jQuery, you might dont need all of the features of this lib, try smaller/optimized version of it.
* Minify your code, e.g. javascript code. gzip it.
* Reduce render blocking resources - dont load things which wont be shown as a part of first render. TD - check more on this.
* Use CDN's - CDN's are content delivery network spread across the globe. You can move your images, libs scripts to these servers.
* Use browser caching - it happend automatically but can be controlled manually using cache-control header. 
* Rewrite your app completely from scratch with best practices.
* Pagination - loading partial data first
* Spliting into bundles - lazy load bundles
* Request what's needed - similar to bundle splitting and load only required bundles
* Use Incognito mode to check the performance issues
* 
