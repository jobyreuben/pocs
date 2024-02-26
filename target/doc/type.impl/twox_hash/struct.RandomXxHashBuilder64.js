(function() {var type_impls = {
"twox_hash":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-RandomXxHashBuilder64\" class=\"impl\"><a class=\"src rightside\" href=\"src/twox_hash/std_support.rs.html#6\">source</a><a href=\"#impl-Clone-for-RandomXxHashBuilder64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"twox_hash/struct.RandomXxHashBuilder64.html\" title=\"struct twox_hash::RandomXxHashBuilder64\">RandomXxHashBuilder64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/twox_hash/std_support.rs.html#6\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"twox_hash/struct.RandomXxHashBuilder64.html\" title=\"struct twox_hash::RandomXxHashBuilder64\">RandomXxHashBuilder64</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","twox_hash::RandomXxHashBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-RandomXxHashBuilder64\" class=\"impl\"><a class=\"src rightside\" href=\"src/twox_hash/std_support.rs.html#16-20\">source</a><a href=\"#impl-Default-for-RandomXxHashBuilder64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"twox_hash/struct.RandomXxHashBuilder64.html\" title=\"struct twox_hash::RandomXxHashBuilder64\">RandomXxHashBuilder64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/twox_hash/std_support.rs.html#17-19\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"twox_hash/struct.RandomXxHashBuilder64.html\" title=\"struct twox_hash::RandomXxHashBuilder64\">RandomXxHashBuilder64</a></h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","twox_hash::RandomXxHashBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildHasher-for-RandomXxHashBuilder64\" class=\"impl\"><a class=\"src rightside\" href=\"src/twox_hash/std_support.rs.html#22-28\">source</a><a href=\"#impl-BuildHasher-for-RandomXxHashBuilder64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> for <a class=\"struct\" href=\"twox_hash/struct.RandomXxHashBuilder64.html\" title=\"struct twox_hash::RandomXxHashBuilder64\">RandomXxHashBuilder64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Hasher\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Hasher\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html#associatedtype.Hasher\" class=\"associatedtype\">Hasher</a> = <a class=\"struct\" href=\"twox_hash/struct.XxHash64.html\" title=\"struct twox_hash::XxHash64\">XxHash64</a></h4></section></summary><div class='docblock'>Type of the hasher that will be created.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.build_hasher\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/twox_hash/std_support.rs.html#25-27\">source</a><a href=\"#method.build_hasher\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html#tymethod.build_hasher\" class=\"fn\">build_hasher</a>(&amp;self) -&gt; <a class=\"struct\" href=\"twox_hash/struct.XxHash64.html\" title=\"struct twox_hash::XxHash64\">XxHash64</a></h4></section></summary><div class='docblock'>Creates a new hasher. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html#tymethod.build_hasher\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_one\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.71.0\">1.71.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#695-698\">source</a></span><a href=\"#method.hash_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html#method.hash_one\" class=\"fn\">hash_one</a>&lt;T&gt;(&amp;self, x: T) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html#associatedtype.Hasher\" title=\"type core::hash::BuildHasher::Hasher\">Hasher</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Calculates the hash of a single value. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html#method.hash_one\">Read more</a></div></details></div></details>","BuildHasher","twox_hash::RandomXxHashBuilder"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()