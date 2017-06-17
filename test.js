import test from "ava";
import r from "./";

test(t => {
	t.true(r.all.length > 0);
	t.true(r.check("settings"));
	t.true(r.check("issues"));

	t.false(r.check());
	t.false(r.check(null));
	t.false(r.check("Google"));
	t.false(r.check("Mottie"));
});
