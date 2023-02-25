
# Improve Front End Performance

* Use Lighthouse to measure performance. It generates report around performance, accessibility, best practices, SEO.
* Optimize your images, videos etc. Convert them into next generation formats - TIFF.
* Remove unwanted dependencies like take example of jQuery, you might dont need all of the features of this lib, try smaller/optimized version of it.
* Minify your code, e.g. javascript, css code. gzip it.
* Asynchronous loading of your JS and css files.
* Avoid inline CSS.
* Reduce render blocking resources - dont load things which wont be shown as a part of first render. Defer large assets. TD - check more on this.
* Use CDN's - CDN's are content delivery network spread across the globe. You can move your images, libs scripts to these servers.
* Use browser caching - it happend automatically but can be controlled manually using cache-control header. 
* Rewrite your app completely from scratch with best practices.
* Pagination - loading partial data first
* Spliting into bundles - lazy load bundles
* Request what's needed - similar to bundle splitting and load only required bundles
