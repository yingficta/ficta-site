# Website Specification Archive

This directory contains versioned snapshots of the Ficta website specification document.

## Current Specification

**Always refer to the main spec file for current information:**
- **Location:** `/WEBSITE_SPEC.md` (root of repository)
- **Status:** Living document (continuously updated)

## Versioned Specifications

Archived snapshots of major versions:

| Version | Date | File | Description |
|---------|------|------|-------------|
| **1.0** | Oct 31, 2024 | [SPEC_v1.0.md](./SPEC_v1.0.md) | Initial production release. Complete rebuild from Figma, animated typewriter, Cloudflare Pages deployment. |

## When to Create a New Version

Create a versioned copy when you make **major changes**:

### ✅ Create New Version For:
- **Major redesigns** - Complete visual overhaul
- **Architecture changes** - New framework, hosting platform, or tech stack
- **Significant feature additions** - New pages, major functionality
- **Platform migrations** - Moving from Cloudflare to another host
- **Breaking changes** - Changes that fundamentally alter the site

### ❌ Don't Create New Version For:
- Minor content updates
- Small feature additions
- Bug fixes
- Performance optimizations
- Styling tweaks
- Minor component changes

## How to Create a New Version

When you're ready to create a major version:

```bash
# 1. Update /WEBSITE_SPEC.md with all your changes
# 2. Copy it to the archive with the new version number
cp WEBSITE_SPEC.md docs/specs/SPEC_v2.0.md

# 3. Update this README.md with the new version entry
# 4. Commit everything together
git add .
git commit -m "Archive v2.0 specification - [brief description]"
git push
```

## Version Numbering Convention

Use semantic versioning:

- **Major (X.0)**: Complete redesigns, architecture changes
- **Minor (1.X)**: Significant new features or pages
- **Patch (1.0.X)**: Generally not archived (track in git history only)

### Examples:
- `v1.0` → `v2.0`: Complete redesign with new framework
- `v1.0` → `v1.1`: Added blog section and CMS integration
- `v1.0` → `v1.0.1`: Fixed animation bug (no archive needed)

## Accessing Previous Versions

### Via Archived Files
Simply open the file in this directory:
```
docs/specs/SPEC_v1.0.md
docs/specs/SPEC_v2.0.md
```

### Via Git History
To see the spec at any point in time:
```bash
# See all changes to main spec
git log WEBSITE_SPEC.md

# View spec from specific date
git show @{2024-10-31}:WEBSITE_SPEC.md

# View spec from specific commit
git show abc123:WEBSITE_SPEC.md

# See diff between versions
git diff docs/specs/SPEC_v1.0.md docs/specs/SPEC_v2.0.md
```

## Best Practices

1. **Keep main spec current**: Always update `/WEBSITE_SPEC.md` first
2. **Archive at milestones**: Create snapshots when releasing major updates
3. **Document changes**: Update Version History section in main spec
4. **Descriptive commits**: Use clear commit messages when archiving
5. **Update this README**: Add new versions to the table above

## Questions?

Contact: ying@ficta.ai

---

**Last Updated:** October 31, 2024
