# fullPage.js Update Workflows

This directory contains GitHub Actions workflows that automatically check for and update the fullPage.js dependency in the react-fullpage wrapper.

## Workflows

### 1. `fullpage-update.yml` - Main Update Workflow
- **Schedule**: Runs daily at 2 AM UTC
- **Manual Trigger**: Available with force update option
- **Purpose**: Automatically checks for fullPage.js updates and pushes to dev branch

**Features:**
- Compares current vs latest fullPage.js version using semantic versioning
- Updates package.json if newer version available
- Increments package version (patch)
- Builds the project
- Pushes changes directly to dev branch
- Force update option for manual triggers
- Better error handling and notifications
- Comprehensive logging

### 2. `manual-fullpage-check.yml` - Manual Check with Dry Run
- **Schedule**: Manual trigger only
- **Purpose**: Safe manual checking with dry run capability

**Features:**
- Dry run mode to test updates without committing
- Creates GitHub issues for manual review
- Tests build with latest version
- Reverts changes after testing
- Safe for manual verification

## How to Use

### Automatic Updates
The main workflow will run automatically daily at 2 AM UTC and push changes to the dev branch. You can then review and merge to main when ready.

### Manual Triggers

1. **Check for updates (safe):**
   - Go to Actions tab
   - Select "Manual fullPage.js Version Check"
   - Click "Run workflow"
   - Set dry_run to true (default)

2. **Force update:**
   - Go to Actions tab
   - Select "fullPage.js Update Check"
   - Click "Run workflow"
   - Set force_update to true if needed

### Monitoring

- Check the Actions tab to see workflow runs
- Monitor the dev branch for updates
- Review changes before merging to main

## Configuration

### Required Secrets
- `GITHUB_TOKEN` (automatically provided by GitHub)

### Dependencies
- Node.js 18
- npm

### Permissions
The workflows require write permissions to:
- Repository contents

## Version Comparison Logic

1. **Current version**: Extracted from `package.json` dependencies
2. **Latest version**: Fetched from npm registry
3. **Comparison**: Uses semantic versioning rules with `npm semver`
4. **Update decision**: Only updates if latest > current

## Update Process

When an update is needed:
1. Update fullPage.js dependency
2. Increment package version (patch)
3. Build project
4. Commit changes to dev branch
5. Push to dev branch

## Troubleshooting

### Common Issues

1. **Build failures**: Check if new fullPage.js version has breaking changes
2. **Permission errors**: Ensure GITHUB_TOKEN has proper permissions
3. **Push failures**: Check if dev branch exists and is accessible

### Manual Override

If automatic updates fail:
1. Run manual check workflow
2. Review the generated issue
3. Test locally if needed
4. Use force update option if necessary

## Labels

The workflows use these labels:
- `fullpage-update`: For issues about fullPage.js updates
- `dependencies`: For dependency-related changes

## Contributing

To modify these workflows:
1. Test changes in a fork first
2. Use dry run mode for testing
3. Update this README if workflow behavior changes 