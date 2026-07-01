'use client'

import { useEffect, useMemo, useState } from 'react'

import type { ConnectConfig } from '../types.js'
import { checkAuthStatus } from '../utils/checkAuthStatus.js'
import {
  cacheProjectName,
  fetchWalletConfiguration,
  getCachedProjectName,
<<<<<<< HEAD
=======
  getCachedWalletConfiguration,
>>>>>>> upstream/master
  mapWalletConfigurationToOverrides,
  mergeConnectConfigWithWalletConfiguration,
  normalizeWalletUrl,
  type WalletConfigurationOverrides,
<<<<<<< HEAD
  type WalletConfigurationProvider
} from '../utils/walletConfiguration.js'

export const useResolvedConnectConfig = (config: ConnectConfig) => {
  const [resolvedConfig, setResolvedConfig] = useState<ConnectConfig>(config)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [enabledProviders, setEnabledProviders] = useState<WalletConfigurationProvider[] | undefined>(undefined)
  const [walletConfigurationSignIn, setWalletConfigurationSignIn] = useState<WalletConfigurationOverrides['signIn']>()
=======
  type WalletConfigurationProvider,
  type WalletConfigurationSdkConfig
} from '../utils/walletConfiguration.js'

const getInitialCachedState = (config: ConnectConfig) => {
  if (!config.walletUrl) {
    return {
      resolvedConfig: config,
      enabledProviders: undefined,
      walletConfigurationSignIn: undefined,
      sdkConfig: undefined
    }
  }

  const normalizedWalletUrl = normalizeWalletUrl(config.walletUrl)
  if (!normalizedWalletUrl) {
    return {
      resolvedConfig: config,
      enabledProviders: undefined,
      walletConfigurationSignIn: undefined,
      sdkConfig: undefined
    }
  }

  const cachedProjectName = getCachedProjectName(normalizedWalletUrl)
  const cachedWalletConfiguration = getCachedWalletConfiguration(normalizedWalletUrl)
  const cachedOverrides = cachedWalletConfiguration ? mapWalletConfigurationToOverrides(cachedWalletConfiguration) : undefined
  const walletConfigurationSignIn =
    cachedOverrides?.signIn || (cachedProjectName ? { projectName: cachedProjectName } : undefined)

  return {
    resolvedConfig: cachedOverrides ? mergeConnectConfigWithWalletConfiguration(config, cachedOverrides) : config,
    enabledProviders: cachedOverrides?.enabledProviders,
    walletConfigurationSignIn,
    sdkConfig: cachedOverrides?.sdkConfig
  }
}

const areOverridesEqual = (left: WalletConfigurationOverrides | undefined, right: WalletConfigurationOverrides | undefined) => {
  if (!left && !right) {
    return true
  }

  if (!left || !right) {
    return false
  }

  const leftChainIds = left.chainIds
  const rightChainIds = right.chainIds
  if (leftChainIds || rightChainIds) {
    if (!leftChainIds || !rightChainIds || leftChainIds.length !== rightChainIds.length) {
      return false
    }
    for (let index = 0; index < leftChainIds.length; index += 1) {
      if (leftChainIds[index] !== rightChainIds[index]) {
        return false
      }
    }
  }

  if (left.defaultChainId !== right.defaultChainId) {
    return false
  }

  const leftProviders = left.enabledProviders
  const rightProviders = right.enabledProviders
  if (leftProviders || rightProviders) {
    if (!leftProviders || !rightProviders || leftProviders.length !== rightProviders.length) {
      return false
    }
    for (let index = 0; index < leftProviders.length; index += 1) {
      if (leftProviders[index] !== rightProviders[index]) {
        return false
      }
    }
  }

  const leftSignIn = left.signIn
  const rightSignIn = right.signIn
  if (leftSignIn || rightSignIn) {
    if (!leftSignIn || !rightSignIn) {
      return false
    }
    if (leftSignIn.projectName !== rightSignIn.projectName || leftSignIn.logoUrl !== rightSignIn.logoUrl) {
      return false
    }
  }

  const leftSdkConfig = left.sdkConfig
  const rightSdkConfig = right.sdkConfig
  if (leftSdkConfig || rightSdkConfig) {
    if (!leftSdkConfig || !rightSdkConfig) {
      return false
    }
    if (
      leftSdkConfig.brandedSignIn !== rightSdkConfig.brandedSignIn ||
      leftSdkConfig.signInButtonTitle !== rightSdkConfig.signInButtonTitle ||
      leftSdkConfig.signInButtonLogo !== rightSdkConfig.signInButtonLogo
    ) {
      return false
    }
  }

  return true
}

export const useResolvedConnectConfig = (config: ConnectConfig) => {
  const initialCachedState = getInitialCachedState(config)
  const [resolvedConfig, setResolvedConfig] = useState<ConnectConfig>(initialCachedState.resolvedConfig)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [enabledProviders, setEnabledProviders] = useState<WalletConfigurationProvider[] | undefined>(
    initialCachedState.enabledProviders
  )
  const [walletConfigurationSignIn, setWalletConfigurationSignIn] = useState<WalletConfigurationOverrides['signIn']>(
    initialCachedState.walletConfigurationSignIn
  )
  const [sdkConfig, setSdkConfig] = useState<WalletConfigurationSdkConfig | undefined>(initialCachedState.sdkConfig)
>>>>>>> upstream/master
  const [isV3WalletSignedIn, setIsV3WalletSignedIn] = useState<boolean | null>(null)
  const [isAuthStatusLoading, setIsAuthStatusLoading] = useState<boolean>(false)

  const normalizedWalletUrl = useMemo(() => {
    return config.walletUrl ? normalizeWalletUrl(config.walletUrl) : ''
  }, [config.walletUrl])

  useEffect(() => {
<<<<<<< HEAD
    setResolvedConfig(config)
    setEnabledProviders(undefined)
    setWalletConfigurationSignIn(undefined)
=======
    const cachedState = getInitialCachedState(config)
    setResolvedConfig(cachedState.resolvedConfig)
    setEnabledProviders(cachedState.enabledProviders)
    setWalletConfigurationSignIn(cachedState.walletConfigurationSignIn)
    setSdkConfig(cachedState.sdkConfig)
>>>>>>> upstream/master
    setIsV3WalletSignedIn(null)
    setIsAuthStatusLoading(false)
  }, [config])

  useEffect(() => {
    let cancelled = false

    const cachedProjectName = normalizedWalletUrl ? getCachedProjectName(normalizedWalletUrl) : undefined
<<<<<<< HEAD
    const cachedSignIn = cachedProjectName ? { projectName: cachedProjectName } : undefined
=======
    const cachedWalletConfiguration = normalizedWalletUrl ? getCachedWalletConfiguration(normalizedWalletUrl) : undefined
    const cachedOverrides = cachedWalletConfiguration ? mapWalletConfigurationToOverrides(cachedWalletConfiguration) : undefined
    const cachedSignIn = cachedOverrides?.signIn || (cachedProjectName ? { projectName: cachedProjectName } : undefined)
>>>>>>> upstream/master

    if (!normalizedWalletUrl) {
      setResolvedConfig(config)
      setEnabledProviders(undefined)
      setWalletConfigurationSignIn(undefined)
<<<<<<< HEAD
=======
      setSdkConfig(undefined)
>>>>>>> upstream/master
      setIsV3WalletSignedIn(null)
      setIsLoading(false)
      setIsAuthStatusLoading(false)
      return () => {
        cancelled = true
      }
    }

<<<<<<< HEAD
    setResolvedConfig(config)
    setWalletConfigurationSignIn(cachedSignIn)
=======
    setResolvedConfig(cachedOverrides ? mergeConnectConfigWithWalletConfiguration(config, cachedOverrides) : config)
    setEnabledProviders(cachedOverrides?.enabledProviders)
    setWalletConfigurationSignIn(cachedSignIn)
    setSdkConfig(cachedOverrides?.sdkConfig)
>>>>>>> upstream/master
    setIsLoading(true)
    setIsAuthStatusLoading(true)

    checkAuthStatus(normalizedWalletUrl)
      .then(signedIn => {
        if (!cancelled) {
          setIsV3WalletSignedIn(signedIn)
        }
      })
      .catch(error => {
        if (!cancelled) {
          console.warn('Failed to check auth status', error)
          setIsV3WalletSignedIn(false)
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsAuthStatusLoading(false)
        }
      })

<<<<<<< HEAD
    fetchWalletConfiguration(normalizedWalletUrl)
=======
    fetchWalletConfiguration(normalizedWalletUrl, { force: Boolean(cachedWalletConfiguration) })
>>>>>>> upstream/master
      .then(remoteConfig => {
        if (cancelled) {
          return
        }

        const overrides = mapWalletConfigurationToOverrides(remoteConfig)
<<<<<<< HEAD
        setEnabledProviders(overrides.enabledProviders)
        setWalletConfigurationSignIn(overrides.signIn)
        setResolvedConfig(mergeConnectConfigWithWalletConfiguration(config, overrides))
=======
        if (!areOverridesEqual(cachedOverrides, overrides)) {
          setEnabledProviders(overrides.enabledProviders)
          setWalletConfigurationSignIn(overrides.signIn)
          setSdkConfig(overrides.sdkConfig)
          setResolvedConfig(mergeConnectConfigWithWalletConfiguration(config, overrides))
        }
>>>>>>> upstream/master
        if (overrides.signIn?.projectName) {
          cacheProjectName(normalizedWalletUrl, overrides.signIn.projectName)
        }
      })
      .catch(error => {
        if (!cancelled) {
          console.warn('Failed to fetch wallet configuration', error)
<<<<<<< HEAD
          setResolvedConfig(config)
          setEnabledProviders(undefined)
          setWalletConfigurationSignIn(cachedSignIn)
=======
          setResolvedConfig(cachedOverrides ? mergeConnectConfigWithWalletConfiguration(config, cachedOverrides) : config)
          setEnabledProviders(cachedOverrides?.enabledProviders)
          setWalletConfigurationSignIn(cachedSignIn)
          setSdkConfig(cachedOverrides?.sdkConfig)
>>>>>>> upstream/master
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [normalizedWalletUrl, config])

  return useMemo(
    () => ({
      resolvedConfig,
      isLoading,
      enabledProviders,
      walletConfigurationSignIn,
<<<<<<< HEAD
      isV3WalletSignedIn,
      isAuthStatusLoading
    }),
    [resolvedConfig, isLoading, enabledProviders, walletConfigurationSignIn, isV3WalletSignedIn, isAuthStatusLoading]
=======
      sdkConfig,
      isV3WalletSignedIn,
      isAuthStatusLoading
    }),
    [resolvedConfig, isLoading, enabledProviders, walletConfigurationSignIn, sdkConfig, isV3WalletSignedIn, isAuthStatusLoading]
>>>>>>> upstream/master
  )
}
