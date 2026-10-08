<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Keep the public marketing experience as one anchored page because the requested navigation is an intentional single-page flow.
- Dedicated insurance product pages use separate TanStack leaf routes; the homepage remains anchored so its original navigation is preserved.
- Share Gitvisha chrome through site-chrome and product sections/forms through insurance modules so future product pages reuse the approved structure without redesigning the homepage.
- Validate vehicle enquiries through the shared schema without sending or persisting data until an explicit submission integration is requested.
