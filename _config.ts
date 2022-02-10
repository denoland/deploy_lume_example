import lume from "https:/deno.land/x/lume@v1.5.1/mod.ts";

const site = lume();
site.copy("assets", ".");

export default site;
