# wasmbuild - Example

Main files:

- `rs_lib/src/lib.rs` - Rust source code.
- `lib/rs_lib_bg.wasm` - Generated .wasm file from the Rust code.
- `lib/rs_lib.generated.js` - Generated JS file that can be used to call into
  the Wasm file.
- `main.js` - Module that shows an example of using `lib/rs_lib.generated.js`.

After making edits to `rs_lib/src/lib.rs`, run `deno task wasmbuild` to recreate
the `lib/rs_lib_bg.wasm` and `lib/rs_lib.generated.js` files.

## Deno

To run the example in Deno:

```sh
deno run --allow-read=. main.js
```

The output should be `3`.

## Browser

To run the example in the browser, start an http server that serves files in the
current directory as follows:

```shellsession
$ deno run --allow-net --allow-read https://deno.land/std@0.144.0/http/file_server.ts
Listening on http://localhost:4507/
```

Then navigate to the link shown and open the browser console. You should see `3`
logged to the console.
