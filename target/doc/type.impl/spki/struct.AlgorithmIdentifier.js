(function() {var type_impls = {
"spki":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#98-107\">source</a><a href=\"#impl-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params&gt; <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.assert_algorithm_oid\" class=\"method\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#100-106\">source</a><h4 class=\"code-header\">pub fn <a href=\"spki/struct.AlgorithmIdentifier.html#tymethod.assert_algorithm_oid\" class=\"fn\">assert_algorithm_oid</a>(\n    &amp;self,\n    expected_oid: <a class=\"struct\" href=\"spki/struct.ObjectIdentifier.html\" title=\"struct spki::ObjectIdentifier\">ObjectIdentifier</a>\n) -&gt; <a class=\"type\" href=\"spki/type.Result.html\" title=\"type spki::Result\">Result</a>&lt;<a class=\"struct\" href=\"spki/struct.ObjectIdentifier.html\" title=\"struct spki::ObjectIdentifier\">ObjectIdentifier</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Assert the <code>algorithm</code> OID is an expected value.</p>\n</div></details></div></details>",0,"spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"],["<section id=\"impl-StructuralEq-for-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#24\">source</a><a href=\"#impl-StructuralEq-for-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;</h3></section>","StructuralEq","spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3C%26%5Bu8%5D%3E-for-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#65-74\">source</a><a href=\"#impl-TryFrom%3C%26%5Bu8%5D%3E-for-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Params&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'a [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;<div class=\"where\">where\n    Params: <a class=\"trait\" href=\"der/asn1/choice/trait.Choice.html\" title=\"trait der::asn1::choice::Choice\">Choice</a>&lt;'a&gt; + <a class=\"trait\" href=\"der/encode/trait.Encode.html\" title=\"trait der::encode::Encode\">Encode</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"spki/enum.Error.html\" title=\"enum spki::Error\">Error</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#71-73\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(bytes: &amp;'a [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"type\" href=\"spki/type.Result.html\" title=\"type spki::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<&'a [u8]>","spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DecodeValue%3C'a%3E-for-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#34-46\">source</a><a href=\"#impl-DecodeValue%3C'a%3E-for-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Params&gt; <a class=\"trait\" href=\"der/decode/trait.DecodeValue.html\" title=\"trait der::decode::DecodeValue\">DecodeValue</a>&lt;'a&gt; for <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;<div class=\"where\">where\n    Params: <a class=\"trait\" href=\"der/asn1/choice/trait.Choice.html\" title=\"trait der::asn1::choice::Choice\">Choice</a>&lt;'a&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_value\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#38-45\">source</a><a href=\"#method.decode_value\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"der/decode/trait.DecodeValue.html#tymethod.decode_value\" class=\"fn\">decode_value</a>&lt;R: <a class=\"trait\" href=\"der/reader/trait.Reader.html\" title=\"trait der::reader::Reader\">Reader</a>&lt;'a&gt;&gt;(reader: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut R</a>, header: <a class=\"struct\" href=\"der/header/struct.Header.html\" title=\"struct der::header::Header\">Header</a>) -&gt; <a class=\"type\" href=\"der/error/type.Result.html\" title=\"type der::error::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class='docblock'>Attempt to decode this message using the provided <a href=\"der/reader/trait.Reader.html\" title=\"trait der::reader::Reader\"><code>Reader</code></a>.</div></details></div></details>","DecodeValue<'a>","spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"],["<section id=\"impl-Sequence%3C'a%3E-for-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#63\">source</a><a href=\"#impl-Sequence%3C'a%3E-for-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Params&gt; <a class=\"trait\" href=\"der/asn1/sequence/trait.Sequence.html\" title=\"trait der::asn1::sequence::Sequence\">Sequence</a>&lt;'a&gt; for <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;<div class=\"where\">where\n    Params: <a class=\"trait\" href=\"der/asn1/choice/trait.Choice.html\" title=\"trait der::asn1::choice::Choice\">Choice</a>&lt;'a&gt; + <a class=\"trait\" href=\"der/encode/trait.Encode.html\" title=\"trait der::encode::Encode\">Encode</a>,</div></h3></section>","Sequence<'a>","spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialOrd-for-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#24\">source</a><a href=\"#impl-PartialOrd-for-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> for <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.partial_cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#24\">source</a><a href=\"#method.partial_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\" class=\"fn\">partial_cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>This method returns an ordering between <code>self</code> and <code>other</code> values if one exists. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1125\">source</a></span><a href=\"#method.lt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt\" class=\"fn\">lt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;</code> operator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.le\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1142\">source</a></span><a href=\"#method.le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le\" class=\"fn\">le</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1158\">source</a></span><a href=\"#method.gt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt\" class=\"fn\">gt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;</code> operator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ge\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1175\">source</a></span><a href=\"#method.ge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge\" class=\"fn\">ge</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge\">Read more</a></div></details></div></details>","PartialOrd","spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"],["<section id=\"impl-StructuralPartialEq-for-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#24\">source</a><a href=\"#impl-StructuralPartialEq-for-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;</h3></section>","StructuralPartialEq","spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"],["<section id=\"impl-Eq-for-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#24\">source</a><a href=\"#impl-Eq-for-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;</h3></section>","Eq","spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EncodeValue-for-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#48-61\">source</a><a href=\"#impl-EncodeValue-for-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params&gt; <a class=\"trait\" href=\"der/encode/trait.EncodeValue.html\" title=\"trait der::encode::EncodeValue\">EncodeValue</a> for <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;<div class=\"where\">where\n    Params: <a class=\"trait\" href=\"der/encode/trait.Encode.html\" title=\"trait der::encode::Encode\">Encode</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.value_len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#52-54\">source</a><a href=\"#method.value_len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"der/encode/trait.EncodeValue.html#tymethod.value_len\" class=\"fn\">value_len</a>(&amp;self) -&gt; <a class=\"type\" href=\"der/error/type.Result.html\" title=\"type der::error::Result\">Result</a>&lt;<a class=\"struct\" href=\"der/length/struct.Length.html\" title=\"struct der::length::Length\">Length</a>&gt;</h4></section></summary><div class='docblock'>Compute the length of this value (sans [<code>Tag</code>]+<a href=\"der/length/struct.Length.html\" title=\"struct der::length::Length\"><code>Length</code></a> header) when\nencoded as ASN.1 DER.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_value\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#56-60\">source</a><a href=\"#method.encode_value\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"der/encode/trait.EncodeValue.html#tymethod.encode_value\" class=\"fn\">encode_value</a>(&amp;self, writer: &amp;mut impl <a class=\"trait\" href=\"der/writer/trait.Writer.html\" title=\"trait der::writer::Writer\">Writer</a>) -&gt; <a class=\"type\" href=\"der/error/type.Result.html\" title=\"type der::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Encode value (sans [<code>Tag</code>]+<a href=\"der/length/struct.Length.html\" title=\"struct der::length::Length\"><code>Length</code></a> header) as ASN.1 DER using the\nprovided <a href=\"der/writer/trait.Writer.html\" title=\"trait der::writer::Writer\"><code>Writer</code></a>.</div></details></div></details>","EncodeValue","spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#24\">source</a><a href=\"#impl-Debug-for-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#24\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#24\">source</a><a href=\"#impl-Clone-for-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#24\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#24\">source</a><a href=\"#impl-PartialEq-for-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#24\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"],["<section id=\"impl-Copy-for-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#24\">source</a><a href=\"#impl-Copy-for-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;</h3></section>","Copy","spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ValueOrd-for-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#76-86\">source</a><a href=\"#impl-ValueOrd-for-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params&gt; <a class=\"trait\" href=\"der/ord/trait.ValueOrd.html\" title=\"trait der::ord::ValueOrd\">ValueOrd</a> for <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;<div class=\"where\">where\n    Params: <a class=\"trait\" href=\"der/ord/trait.DerOrd.html\" title=\"trait der::ord::DerOrd\">DerOrd</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.value_cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#80-85\">source</a><a href=\"#method.value_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"der/ord/trait.ValueOrd.html#tymethod.value_cmp\" class=\"fn\">value_cmp</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"type\" href=\"der/error/type.Result.html\" title=\"type der::error::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>Return an <a href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\"><code>Ordering</code></a> between value portion of TLV-encoded <code>self</code> and\n<code>other</code> when serialized as ASN.1 DER.</div></details></div></details>","ValueOrd","spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ord-for-AlgorithmIdentifier%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#24\">source</a><a href=\"#impl-Ord-for-AlgorithmIdentifier%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spki/algorithm.rs.html#24\">source</a><a href=\"#method.cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp\" class=\"fn\">cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"spki/struct.AlgorithmIdentifier.html\" title=\"struct spki::AlgorithmIdentifier\">AlgorithmIdentifier</a>&lt;Params&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a></h4></section></summary><div class='docblock'>This method returns an <a href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\"><code>Ordering</code></a> between <code>self</code> and <code>other</code>. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#829-831\">source</a></span><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the maximum of two values. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#849-851\">source</a></span><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the minimum of two values. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clamp\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.50.0\">1.50.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#874-877\">source</a></span><a href=\"#method.clamp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp\" class=\"fn\">clamp</a>(self, min: Self, max: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h4></section></summary><div class='docblock'>Restrict a value to a certain interval. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp\">Read more</a></div></details></div></details>","Ord","spki::algorithm::AlgorithmIdentifierRef","spki::algorithm::AlgorithmIdentifierWithOid","spki::algorithm::AlgorithmIdentifierOwned"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()